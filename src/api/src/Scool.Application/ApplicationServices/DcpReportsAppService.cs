using Microsoft.EntityFrameworkCore;
using Scool.Application.Dtos;
using Scool.Application.IApplicationServices;
using Scool.Domain.Common;
using Scool.Infrastructure.ApplicationServices;
using Scool.Infrastructure.Common;
using Scool.Infrastructure.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Guids;

namespace Scool.ApplicationServices
{
    public class DcpReportsAppService : BasicCrudAppService<
        DcpReport,
        Guid,
        DcpReportDto,
        DcpReportDto,
        CreateUpdateDcpReportDto,
        CreateUpdateDcpReportDto
    >, IDcpReportsAppService
    {
        private readonly IRepository<DcpReport, Guid> _dcpReportsRepo;
        private readonly IRepository<DcpClassReport, Guid> _dcpClassReportsRepo;
        private readonly IRepository<DcpClassReportItem, Guid> _dcpClassReportItemsRepo;
        private readonly IRepository<DcpStudentReport, Guid> _dcpStudentReportsRepo;
        private readonly IRepository<Student, Guid> _studentsRepo;
        private readonly IRepository<Regulation, Guid> _regulationsRepo;
        private readonly IGuidGenerator _guidGenerator;

        public DcpReportsAppService
        (
            IRepository<DcpReport, Guid> dcpReportsRepo,
            IRepository<DcpClassReport, Guid> dcpClassReportsRepo,
            IRepository<DcpClassReportItem, Guid> dcpClassReportItemsRepo,
            IRepository<DcpStudentReport, Guid> dcpStudentReportsRepo,
            IRepository<Student, Guid> studentsRepo,
            IRepository<Regulation, Guid> regulationsRepo,
            IGuidGenerator guidGenerator
        ) : base (dcpReportsRepo)
        {
            _dcpReportsRepo = dcpReportsRepo;
            _dcpClassReportsRepo = dcpClassReportsRepo;
            _dcpClassReportItemsRepo = dcpClassReportItemsRepo;
            _dcpStudentReportsRepo = dcpStudentReportsRepo;
            _studentsRepo = studentsRepo;
            _regulationsRepo = regulationsRepo;
            _guidGenerator = guidGenerator;
        }

        public async override Task<DcpReportDto> CreateAsync(CreateUpdateDcpReportDto input)
        {
            var report = new DcpReport(_guidGenerator.Create());
            var penalty = 0;

            // report on each class
            var clsReports = input.DcpclassReports;
            foreach (var cls in clsReports)
            {
                var dcpClassReport = new DcpClassReport(_guidGenerator.Create());
                dcpClassReport.DcpReportId = report.Id;
                dcpClassReport.ClassId = cls.ClassId;

                var faults = cls.Faults;
                // regulations broken
                foreach (var reg in faults)
                {
                    var dcpClassReportItem = new DcpClassReportItem(_guidGenerator.Create());
                    dcpClassReportItem.DcpClassReportId = dcpClassReport.Id;
                    dcpClassReportItem.RegulationId = reg.RegulationId;

                    // calc pelnaty
                    var point = await _regulationsRepo
                        .Where(x => x.Id == reg.RegulationId)
                        .Select(x => x.Point)
                        .FirstOrDefaultAsync();
                    penalty += point;

                    // student breaking the regulations
                    var studentIds = reg.RelatedStudentIds;
                    var students = await _studentsRepo.Where(x => studentIds.Contains(x.Id)).ToListAsync();

                    foreach (var stdnt in students)
                    {
                        var studentReported = await _dcpStudentReportsRepo.InsertAsync(new DcpStudentReport
                        {
                            DcpClassReportItemId = dcpClassReportItem.Id,
                            StudentId = stdnt.Id
                        });
                        // add student report to dcpClassReportItem
                        dcpClassReportItem.RelatedStudents.Add(studentReported);
                    }
                    // add dcpClassReportItem report to dcpClassReport
                    dcpClassReport.Faults.Add(
                        await _dcpClassReportItemsRepo.InsertAsync(dcpClassReportItem)
                    );
                }
                // add dcpClassReportItem report to dcpClassReport
                report.DcpclassReports.Add(
                    await _dcpClassReportsRepo.InsertAsync(dcpClassReport)
                );
            }

            report.PenaltyTotal = penalty;
            var dcpReport = await _dcpReportsRepo.InsertAsync(report);

            return ObjectMapper.Map<DcpReport, DcpReportDto>(dcpReport);
        }

        public async override Task<DcpReportDto> GetAsync(Guid id)
        {
            var item = await _dcpReportsRepo
                .Where(x => x.Id == id)
                .Include(e => e.DcpclassReports)
                .ThenInclude(e => e.Class)
                .Include(e => e.DcpclassReports)
                .ThenInclude(e => e.Faults)
                .ThenInclude(e => e.RelatedStudents)
                .ThenInclude(e => e.Student)
                .Include(e => e.DcpclassReports)
                .ThenInclude(e => e.Faults)
                .ThenInclude(e => e.Regulation)
                .FirstOrDefaultAsync();
            return ObjectMapper.Map<DcpReport, DcpReportDto>(item);
        }

        public async override Task<PagingModel<DcpReportDto>> PostPagingAsync(PageInfoRequestDto input)
        {
            var pageSize = input.PageSize > 0 ? input.PageSize : 10;
            var pageIndex = input.PageIndex > 0 ? input.PageIndex : 1;
            var query = _dcpReportsRepo.Filter(input.Filter);
            query = string.IsNullOrEmpty(input.SortName) ? query.OrderBy(x => x.Id) : query.OrderBy(input.SortName, input.Ascend);
            query = query.Page(pageIndex, pageSize);
            query = query
                .Include(e => e.DcpclassReports)
                .ThenInclude(e => e.Class)
                .Include(e => e.DcpclassReports)
                .ThenInclude(e => e.Faults)
                .ThenInclude(e => e.RelatedStudents)
                .ThenInclude(e => e.Student)
                .Include(e => e.DcpclassReports)
                .ThenInclude(e => e.Faults)
                .ThenInclude(e => e.Regulation);

            var items = ObjectMapper.Map<List<DcpReport>, List<DcpReportDto>>(await query.ToListAsync());
            var totalCount = await _dcpReportsRepo.Filter(input.Filter).CountAsync();

            return new PagingModel<DcpReportDto>(items, totalCount, pageIndex, pageSize);
        }
    }
}

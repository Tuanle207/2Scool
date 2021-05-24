using Microsoft.EntityFrameworkCore;
using Scool.Common;
using Scool.Domain.Common;
using Scool.Infrastructure.AppService;
using Scool.Infrastructure.Linq;
using Scool.Infrastructure.Standard.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace Scool.Students
{
    public class StudentsAppService : BasicCrudAppService<
        Student,
        Guid,
        StudentDto,
        StudentDto,
        CreateUpdateStudentDto,
        CreateUpdateStudentDto
    >, IStudentsAppService
    {
        private readonly IRepository<Student, Guid> _studentRepo;

        public StudentsAppService(IRepository<Student, Guid> studentRepo) : base(studentRepo)
        {
            _studentRepo = studentRepo;
        }

        public override async Task<PagingModel<StudentDto>> PostPagingAsync(PageInfoRequestDto input)
        {
            var pageSize = input.PageSize > 0 ? input.PageSize : 10;
            var pageIndex = input.PageIndex > 0 ? input.PageIndex : 1;
            var query = _studentRepo.Filter(input.Filter);
            query = string.IsNullOrEmpty(input.SortName) ? query.OrderBy(x => x.Id) : query.OrderBy(input.SortName, input.Ascend);
            query = query.Page(pageIndex, pageSize);
            query = query.Include(e => e.Class);

            var items = ObjectMapper.Map<List<Student>, List<StudentDto>>(await query.ToListAsync());
            var totalCount = await _studentRepo.Filter(input.Filter).CountAsync();

            return new PagingModel<StudentDto>(items, totalCount, pageIndex, pageSize);
        }

        public override async Task<StudentDto> GetAsync(Guid id)
        {
            var entity = await _studentRepo.Where(e => e.Id == id)
                   .Include(e => e.Class)
                   .FirstOrDefaultAsync();
            return ObjectMapper.Map<Student, StudentDto>(entity);
        }
    }
}

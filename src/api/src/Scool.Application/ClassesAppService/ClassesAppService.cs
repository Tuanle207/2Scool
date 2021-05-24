using Microsoft.EntityFrameworkCore;
using Scool.Classes;
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

namespace Scool.ClassesAppService
{
    public class ClassesAppService : BasicCrudAppService<
        Class,
        Guid,
        ClassDto,
        ClassForListDto,
        CreateUpdateClassDto,
        CreateUpdateClassDto
    >, IClassesAppService
    {
        private readonly IRepository<Class, Guid> _classRepo;

        public ClassesAppService(IRepository<Class, Guid> classRepo) : base(classRepo)
        {
            _classRepo = classRepo;
        }

        public override async Task<PagingModel<ClassForListDto>> PostPagingAsync(PageInfoRequestDto input)
        {
            var pageSize = input.PageSize > 0 ? input.PageSize : 10;
            var pageIndex = input.PageIndex > 0 ? input.PageIndex : 1;
            var query = _classRepo.Filter(input.Filter);
            query = string.IsNullOrEmpty(input.SortName) ? query.OrderBy(x => x.Id) : query.OrderBy(input.SortName, input.Ascend);
            query = query.Page(pageIndex, pageSize);
            query = query.Include(e => e.Course)
                    .Include(e => e.FormTeacher)
                    .Include(e => e.Grade);

            var items = ObjectMapper.Map<List<Class>, List<ClassForListDto>>(await query.ToListAsync());
            var totalCount = await _classRepo.Filter(input.Filter).CountAsync();

            return new PagingModel<ClassForListDto>(items, totalCount, pageIndex, pageSize);
        }

        public override async Task<ClassDto> GetAsync(Guid id)
        {
            var entity = await _classRepo.Where(e => e.Id == id)
                    .Include(e => e.Course)
                    .Include(e => e.FormTeacher)
                    .Include(e => e.Grade)
                    .Include(e => e.Students)
                    .FirstOrDefaultAsync();
            return ObjectMapper.Map<Class, ClassDto>(entity);
        }
    }
}

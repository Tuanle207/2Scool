using Scool.Common;
using Scool.Domain.Common;
using Scool.Grades;
using Scool.Infrastructure.AppService;
using System;
using Volo.Abp.Domain.Repositories;

namespace Scool.GradesAppService
{
    public class GradesAppService : BasicCrudAppService<
        Grade,
        Guid,
        GradeDto,
        GradeDto,
        CreateUpdateGradeDto,
        CreateUpdateGradeDto
    >, IGradesAppService
    {
        public GradesAppService(IRepository<Grade, Guid> gradeRepo) : base(gradeRepo)
        {

        }
    }
}

using Scool.Common;
using Scool.Domain.Common;
using Scool.Infrastructure.AppService;
using Scool.Teachers;
using System;
using Volo.Abp.Domain.Repositories;

namespace Scool.TeachersAppService
{
    public class TeachersAppService : BasicCrudAppService<
        Teacher,
        Guid,
        TeacherDto,
        TeacherDto,
        CreateUpdateTeacherDto,
        CreateUpdateTeacherDto
    >, ITeachersAppService
    {
        public TeachersAppService(IRepository<Teacher, Guid> teachersRepo) : base(teachersRepo)
        {

        }
    }
}

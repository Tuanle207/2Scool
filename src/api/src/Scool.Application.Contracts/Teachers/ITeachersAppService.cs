using Scool.Common;
using Scool.Infrastructure.Standard.AppService;
using System;
using System.Collections.Generic;
using System.Text;

namespace Scool.Teachers
{
    public interface ITeachersAppService : IBasicCrudAppService<
        Guid,
        TeacherDto,
        TeacherDto,
        CreateUpdateTeacherDto,
        CreateUpdateTeacherDto
    >
    {
    }
}

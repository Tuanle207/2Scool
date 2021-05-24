using Scool.Common;
using Scool.Infrastructure.Standard.AppService;
using System;
using System.Collections.Generic;
using System.Text;

namespace Scool.Students
{
    public interface IStudentsAppService : IBasicCrudAppService<
        Guid,
        StudentDto,
        StudentDto,
        CreateUpdateStudentDto,
        CreateUpdateStudentDto
    >
    {
    }
}

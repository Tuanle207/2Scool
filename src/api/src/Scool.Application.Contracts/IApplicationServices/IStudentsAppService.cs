using Scool.Application.Dtos;
using Scool.Infrastructure.ApplicationServices;
using System;
using System.Collections.Generic;
using System.Text;

namespace Scool.Application.IApplicationServices
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

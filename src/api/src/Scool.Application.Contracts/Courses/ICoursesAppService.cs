using System;
using Scool.Application.Contracts.Courses.Dtos;
using Scool.Infrastructure.Standard.AppService;

namespace Scool.Application.Contracts.CoursesAppService
{
    public interface ICoursesAppService: IBasicCrudAppService<
        Guid,
        CourseDto,
        CourseListDto,
        CreateUpdateCourseDto,
        CreateUpdateCourseDto
      >
    {
    }
}
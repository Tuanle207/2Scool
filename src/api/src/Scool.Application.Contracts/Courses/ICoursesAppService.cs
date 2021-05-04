using System;
using Scool.Application.Contracts.Courses.Dtos;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Scool.Application.Contracts.Courses
{
    public interface ICoursesAppService: ICrudAppService<
        CourseDto,
        Guid,
        PagedAndSortedResultRequestDto,
        CreateUpdateCourseDto
      >
    {
         
    }
}
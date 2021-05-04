using System;
using Scool.Application.Contracts.Courses;
using Scool.Application.Contracts.Courses.Dtos;
using Scool.Domain.Courses.Model;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Scool.Application.CoursesAppService
{
    public class CoursesAppService :
      CrudAppService<
        Course,
        CourseDto,
        Guid,
        PagedAndSortedResultRequestDto,
        CreateUpdateCourseDto
      >, ICoursesAppService
    {
        public CoursesAppService(IRepository<Course, Guid> courseRepo) : base(courseRepo)
        {
            
        }
    }
}
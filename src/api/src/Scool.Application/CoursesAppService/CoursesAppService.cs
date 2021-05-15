using System;
using Scool.Application.Contracts.Courses.Dtos;
using Scool.Application.Contracts.CoursesAppService;
using Scool.Domain.Common;
using Scool.Infrastructure.AppService;
using Volo.Abp.Domain.Repositories;

namespace Scool.Application.CoursesAppService
{
    public class CoursesAppService :
        BasicCrudAppService<
            Course,
            Guid,
            CourseDto,
            CourseListDto,
            CreateUpdateCourseDto,
            CreateUpdateCourseDto
        >, ICoursesAppService
    {
        public CoursesAppService(IRepository<Course, Guid> courseRepo) : base(courseRepo)
        {
            
        }
       
    }
}
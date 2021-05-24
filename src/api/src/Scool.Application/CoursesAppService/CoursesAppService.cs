using System;
using Scool.Common;
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
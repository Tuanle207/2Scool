using AutoMapper;
using Scool.Domain.Common;
using Scool.Application.Contracts.Courses.Dtos;

namespace Scool.Application.CoursesAppService
{
    public class CoursesAutoMapperProfile : Profile
    {
        public CoursesAutoMapperProfile()
        {
            // CreateMap
            CreateMap<Course, CourseDto>();
            CreateMap<Course, CourseListDto>();
            CreateMap<CreateUpdateCourseDto, Course>();
        }
    }
}

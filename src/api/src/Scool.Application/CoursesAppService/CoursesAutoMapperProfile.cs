using AutoMapper;
using Scool.Domain.Courses.Model;
using Scool.Application.Contracts.Courses.Dtos;

namespace Scool.Application.CoursesAppService
{
    public class CoursesAutoMapperProfile : Profile
    {
        public CoursesAutoMapperProfile()
        {
            // CreateMap
            CreateMap<Course, CourseDto>();
            CreateMap<CreateUpdateCourseDto, Course>();
        }
    }
}

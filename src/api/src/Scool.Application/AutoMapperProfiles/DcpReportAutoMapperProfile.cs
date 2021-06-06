using AutoMapper;
using Scool.Application.Dtos;
using Scool.Domain.Common;

namespace Scool.AutoMapperProfiles
{
    public class DcpReportAutoMapperProfile : Profile
    {
        public DcpReportAutoMapperProfile()
        {
            CreateMap<DcpReport, DcpReportDto>();
            CreateMap<DcpClassReport, DcpClassReportDto>();
            CreateMap<DcpClassReportItem, DcpClassReportItemDto>();
            CreateMap<DcpStudentReport, DcpStudentReportDto>();
            CreateMap<Class, ClassForSimpleDto>();
            CreateMap<Student, StudentForSimpleDto>();

            
        }
    }
}

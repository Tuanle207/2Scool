using AutoMapper;
using Scool.Application.Dtos;
using Scool.Domain.Common;
using System;
using System.Collections.Generic;

namespace Scool.AutoMapperProfiles
{
    public class DcpReportAutoMapperProfile : Profile
    {
        public DcpReportAutoMapperProfile()
        {
            CreateMap<DcpReport, DcpReportDto>()
                .ForMember(dest => dest.Creator, opt => opt.Ignore())
                .AfterMap((src, dest) =>
                {
                    dest.Creator = null;
                });
            CreateMap<DcpClassReport, DcpClassReportDto>();
            CreateMap<DcpClassReportItem, DcpClassReportItemDto>();
            CreateMap<DcpStudentReport, DcpStudentReportDto>();
            CreateMap<Class, ClassForSimpleListDto>();
            CreateMap<Student, StudentForSimpleListDto>();
            CreateMap<DcpReport, CreateUpdateDcpReportDto>();
            CreateMap<DcpClassReport, CreateUpdateDcpClassReportDto>();
            CreateMap<DcpClassReportItem, CreateUpdateDcpClassReportItemDto>()
                .ForMember(dest => dest.RelatedStudentIds, opt => opt.Ignore())
                .AfterMap((src, dest) =>
                {
                    var studentsIds = new List<Guid>();
                    foreach (var student in src.RelatedStudents)
                    {
                        studentsIds.Add(student.StudentId);
                    }
                    dest.RelatedStudentIds = studentsIds;
                });




        }
    }
}

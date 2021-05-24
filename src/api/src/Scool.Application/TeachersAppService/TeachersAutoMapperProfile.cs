using AutoMapper;
using Scool.Common;
using Scool.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Scool.TeachersAppService
{
    public class TeachersAutoMapperProfile : Profile
    {
        public TeachersAutoMapperProfile()
        {
            CreateMap<Teacher, TeacherDto>();
            CreateMap<CreateUpdateTeacherDto, Teacher>();
        }
    }
}

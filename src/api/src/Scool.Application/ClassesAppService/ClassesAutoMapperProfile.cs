using AutoMapper;
using Scool.Common;
using Scool.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Scool.ClassesAppService
{
    public class ClassesAutoMapperProfile : Profile
    {
        public ClassesAutoMapperProfile()
        {
            CreateMap<Class, ClassDto>();
            CreateMap<Class, ClassForListDto>();
            CreateMap<Class, ClassForStudentDto>();
            CreateMap<CreateUpdateClassDto, Class>();

        }
    }
}

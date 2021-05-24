using AutoMapper;
using Scool.Common;
using Scool.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Scool.GradesAppService
{
    public class GradesAutoMapperProfile : Profile
    {
        public GradesAutoMapperProfile()
        {
            CreateMap<Grade, GradeDto>();
            CreateMap<CreateUpdateGradeDto, Grade>();
        }
    }
}

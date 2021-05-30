using AutoMapper;
using Scool.Common;
using Scool.Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Scool.Students
{
    public class StudentsAutoMapperProfile : Profile
    {
        public StudentsAutoMapperProfile()
        {
            CreateMap<Student, StudentDto>();
            CreateMap<CreateUpdateStudentDto, Student>();
        }
    }
}

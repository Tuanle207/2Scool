using AutoMapper;
using Scool.Application.Dtos;
using Scool.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Scool.AutoMapperProfiles
{
    public class UsersAutoMapperProfile : Profile
    {
        public UsersAutoMapperProfile()
        {
            CreateMap<AppUser, UserForSimpleListDto>();
        }
    }
}

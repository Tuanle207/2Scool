﻿using Scool.Application.Dtos;
using Scool.Infrastructure.ApplicationServices;
using Scool.Infrastructure.Common;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Scool.Application.IApplicationServices
{
    public interface IClassesAppService : IBasicCrudAppService<
        Guid,
        ClassDto,
        ClassForListDto,
        CreateUpdateClassDto,
        CreateUpdateClassDto
    >
    {
        Task<PagingModel<ClassForSimpleDto>> GetSimpleListAsync();
    }
}

using Scool.Common;
using Scool.Infrastructure.Standard.AppService;
using System;
using System.Collections.Generic;
using System.Text;

namespace Scool.Classes
{
    public interface IClassesAppService : IBasicCrudAppService<
        Guid,
        ClassDto,
        ClassForListDto,
        CreateUpdateClassDto,
        CreateUpdateClassDto
    >
    {
    }
}

using Scool.Application.Dtos;
using Scool.Infrastructure.ApplicationServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Scool.Application.IApplicationServices
{
    public interface IDcpReportsAppService : IBasicCrudAppService<
        Guid,
        DcpReportDto,
        DcpReportDto,
        CreateUpdateDcpReportDto,
        CreateUpdateDcpReportDto
    >
    {

    }
}

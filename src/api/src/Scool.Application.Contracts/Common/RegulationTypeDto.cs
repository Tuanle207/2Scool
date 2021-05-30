using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace Scool.Common
{
    public class RegulationTypeDto : EntityDto<Guid>
    {
        public string Name { get; set; }
        public string DisplayName { get; set; }
    }
}

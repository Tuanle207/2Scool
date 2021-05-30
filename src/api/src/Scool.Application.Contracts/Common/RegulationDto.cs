using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace Scool.Common
{
    public class RegulationDto : EntityDto<Guid>
    {
        public string Name { get; set; }
        public string DisplayName { get; set; }
        public string Point { get; set; }
        public Guid CriteriaId { get; set; }
        public CriteriaDto Criteria { get; set; }
        public Guid RegulationTypeId { get; set; }
        public RegulationTypeDto RegulationType { get; set; }
    }
}

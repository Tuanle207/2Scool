using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities;

namespace Scool.Domain.Common
{
    public class RegulationType : Entity<Guid>
    {
        public string Name { get; set; }
        public string DisplayName { get; set; }
    }
}
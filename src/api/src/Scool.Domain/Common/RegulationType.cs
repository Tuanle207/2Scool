using System;
using Volo.Abp.Domain.Entities;

namespace Scool.Domain.Common
{
    public class RegulationType : Entity<Guid>
    {
        public Guid Name { get; set; }
    }
}
using System;
using Volo.Abp.Domain.Entities;

namespace Scool.Domain.Common
{
    public class Criteria : Entity<Guid>
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
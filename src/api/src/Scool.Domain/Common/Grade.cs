using System;
using Volo.Abp.Domain.Entities;

namespace Scool.Domain.Common
{
    public class Grade : Entity<Guid>
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
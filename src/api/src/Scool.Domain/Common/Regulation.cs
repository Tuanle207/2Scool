using System;
using Volo.Abp.Domain.Entities;

namespace Scool.Domain.Common
{
    public class Regulation : Entity<Guid>
    {
        public string Name { get; set; }
        public string DisplayName  { get; set; }
        public string Point { get; set; }
        public Guid CriteriaId { get; set; }
        public Criteria Criteria { get; set; }
        public Guid CourseId { get; set; }
        public Course Course { get; set; }
        public Guid RegulationTypeId { get; set; }
        public RegulationType RegulationType { get; set; }
    }
}
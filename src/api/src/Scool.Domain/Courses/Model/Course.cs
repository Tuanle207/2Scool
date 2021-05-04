using System;
using Volo.Abp.Domain.Entities;

namespace Scool.Domain.Courses.Model
{
    public class Course : Entity<Guid>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime FinishTime { get; set; }
    }
}
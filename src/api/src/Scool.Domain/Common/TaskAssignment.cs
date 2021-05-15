using System;
using Volo.Abp.Auditing;
using Volo.Abp.Domain.Entities;

namespace Scool.Domain.Common
{
    public class TaskAssignment : Entity<Guid>
    {
        public Guid UserId { get; set; }
        public Guid ClassId { get; set; }
        public Guid CourseId { get; set; }
    }
}
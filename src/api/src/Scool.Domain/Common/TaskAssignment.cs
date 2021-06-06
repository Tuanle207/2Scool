using System;
using Scool.Users;
using Volo.Abp.Auditing;
using Volo.Abp.Domain.Entities;

namespace Scool.Domain.Common
{
    public class TaskAssignment : Entity<Guid>, ICreationAuditedObject
    {
        public Guid AssigneeId { get; set; }
        public Guid ClassId { get; set; }
        public Class Class { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime  { get; set; }
        public DateTime CreationTime { get; set; }
        public Guid? CreatorId { get; set; }
    }
}
using System;
using Volo.Abp.Auditing;
using Volo.Abp.Domain.Entities;


namespace Scool.Domain.Common

{
    public class LessonsRegister : Entity<Guid>, ICreationAuditedObject
    {
        public float TotalPoint { get; set; }
        public int AbsenceNo { get; set; }
        public DateTime CreationTime { get; set; }
        public Guid? CreatorId { get; set; }
    }
}
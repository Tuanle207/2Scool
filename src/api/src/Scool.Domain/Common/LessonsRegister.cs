using System;
using System.Collections.Generic;
using Volo.Abp.Auditing;
using Volo.Abp.Domain.Entities;


namespace Scool.Domain.Common

{
    public class LessonsRegister : Entity<Guid>, ICreationAuditedObject
    {
        public float TotalPoint { get; set; }
        public int AbsenceNo { get; set; }
        public ICollection<LessonRegisterPhotos> AttachedPhotos { get; set; }
        public DateTime CreationTime { get; set; }
        public Guid? CreatorId { get; set; }

        public LessonsRegister()
        {
            AttachedPhotos = new List<LessonRegisterPhotos>();
        }
    }
}
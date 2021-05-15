using System;
using Volo.Abp.Domain.Entities;

namespace Scool.Domain.Common
{
    public class Class : Entity<Guid>
    {
        public string Name { get; set; }
        public Guid CourseId { get; set; }
        public Course Course { get; set; }
        public Guid GradeId { get; set; }
        public Guid FormTeacherId { get; set; }
        public Teacher FormTeacher { get; set; }
        public int NoStudents { get; set; }
    }

}
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace Scool.Common
{
    public class ClassForListDto : IEntityDto<Guid>
    {
        public string Name { get; set; }
        public Guid CourseId { get; set; }
        public CourseDto Course { get; set; }
        public Guid GradeId { get; set; }
        public GradeDto Grade { get; set; }
        public Guid FormTeacherId { get; set; }
        public TeacherDto FormTeacher { get; set; }
        public int NoStudents { get; set; }
        public Guid Id { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace Scool.Common
{
    public class ClassForStudentDto : EntityDto<Guid>
    {
        public string Name { get; set; }
        public Guid CourseId { get; set; }
        public Guid FormTeacherId { get; set; }
    }
}

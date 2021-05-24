using System;
using System.Collections.Generic;
using System.Text;

namespace Scool.Common
{
    public class CreateUpdateClassDto
    {
        public string Name { get; set; }
        public Guid CourseId { get; set; }
        public Guid GradeId { get; set; }
        public Guid FormTeacherId { get; set; }
    }
}

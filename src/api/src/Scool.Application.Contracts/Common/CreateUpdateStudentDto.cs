using System;
using System.Collections.Generic;
using System.Text;

namespace Scool.Common
{
    public class CreateUpdateStudentDto
    {
        public string Name { get; set; }
        public Guid ClassId { get; set; }
        public DateTime Dob { get; set; }
        public string ParentPhoneNumber { get; set; }
    }
}

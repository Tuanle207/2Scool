using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace Scool.Common
{
    public class StudentDto : EntityDto<Guid>
    {
        public string Name { get; set; }
        public Guid ClassId { get; set; }
        public ClassForStudentDto Class { get; set; }
        public DateTime Dob { get; set; }
        public string ParentPhoneNumber { get; set; }
    }
}

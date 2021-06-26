using System;
using System.Collections.Generic;

namespace Scool.Application.Dtos
{
    public class CreateUpdateTaskAssignmentByClassDto
    {
        public List<ClassAssignmentItem> Items { get; set; }
        public string TaskType { get; set; }
    }

    public class ClassAssignmentItem
    {
        public Guid AssigneeId { get; set; }
        public Guid ClassId { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
    }
}

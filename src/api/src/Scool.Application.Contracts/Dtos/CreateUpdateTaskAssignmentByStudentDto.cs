using System;
using System.Collections.Generic;

namespace Scool.Application.Dtos
{
    public class CreateUpdateTaskAssignmentByStudentDto
    {
        public List<UserAssignmentItem> Items { get; set; }
        public string TaskType { get; set; }
    }

    public class UserAssignmentItem
    {
        public Guid AssigneeId { get; set; }
        public List<Guid> ClassIds { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }

    }
}

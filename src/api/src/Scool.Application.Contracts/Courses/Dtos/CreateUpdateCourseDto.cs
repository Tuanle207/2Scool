using System;

namespace Scool.Application.Contracts.Courses.Dtos
{
    public class CreateUpdateCourseDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime FinishTime { get; set; }
    }
}
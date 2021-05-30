using System;
using Volo.Abp.Application.Dtos;

namespace Scool.Common
{
    public class CourseDto : EntityDto<Guid>
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime FinishTime { get; set; }
    }
}
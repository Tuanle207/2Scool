using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Domain.Entities;

namespace Scool.Common
{
    public class CourseForSimpleListDto : Entity<Guid>
    {
        public string Name { get; set; }
    }
}

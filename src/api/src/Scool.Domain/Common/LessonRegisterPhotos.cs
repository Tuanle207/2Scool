using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;

namespace Scool.Domain.Common
{
    public class LessonRegisterPhotos : Entity<Guid>
    {
        public Guid LessonRegisterId { get; set; }
        public string Photo { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace Scool.Common
{
    public class TeacherForSimpleListDto : EntityDto<Guid>
    {
        public string Name { get; set; }
    }
}

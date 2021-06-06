using System;
using Volo.Abp.Application.Dtos;

namespace Scool.Application.Dtos
{
    public class StudentForSimpleDto : EntityDto<Guid>
    {
        public string Name { get; set; }
    }
}

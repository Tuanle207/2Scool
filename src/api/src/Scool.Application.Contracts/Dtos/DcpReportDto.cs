using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace Scool.Application.Dtos
{
    public class DcpReportDto : EntityDto<Guid>
    {
        public int PenaltyTotal { get; set; }
        public string Status { get; set; }
        public DateTime CreationTime { get; set; }
        public Guid? CreatorId { get; set; }
        public ICollection<DcpClassReportDto> DcpClassReports { get; set; }
    }
}

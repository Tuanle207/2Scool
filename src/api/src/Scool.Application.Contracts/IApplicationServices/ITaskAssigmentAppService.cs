using Scool.Application.Dtos;
using Scool.Infrastructure.ApplicationServices;
using Scool.Infrastructure.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Scool.Application.IApplicationServices
{
    public interface ITaskAssigmentAppService : IBasicCrudAppService<
            Guid,
            TaskAssignmentDto,
            TaskAssignmentDto,
            CreateUpdateTaskAssignmentByClassDto,
            CreateUpdateTaskAssignmentByClassDto
        >
    {
        Task CreateByStudentAsync(CreateUpdateTaskAssignmentByStudentDto input);
        Task CreateByClassAsync(CreateUpdateTaskAssignmentByClassDto input);
        Task UpdateByStudentAsync(CreateUpdateTaskAssignmentByStudentDto input);
        Task UpdateByClassAsync(CreateUpdateTaskAssignmentByClassDto input);
        Task<PagingModel<TaskAssignmentDto>> GetByStudentAsync(PageInfoRequestDto input);
        Task<PagingModel<TaskAssignmentDto>> GetByClassAsync(PageInfoRequestDto input);
    }
}

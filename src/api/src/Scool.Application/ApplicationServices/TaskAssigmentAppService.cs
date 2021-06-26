using Microsoft.AspNetCore.Mvc;
using Scool.Application.Dtos;
using Scool.Application.IApplicationServices;
using Scool.Domain.Common;
using Scool.Infrastructure.ApplicationServices;
using Scool.Infrastructure.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace Scool.Application.ApplicationServices
{
    public class TaskAssigmentAppService : BasicCrudAppService<
            TaskAssignment,
            Guid,
            TaskAssignmentDto,
            TaskAssignmentDto,
            CreateUpdateTaskAssignmentByClassDto,
            CreateUpdateTaskAssignmentByClassDto
        >, ITaskAssigmentAppService
    {
        public TaskAssigmentAppService(IRepository<TaskAssignment, Guid> _taskAssignmentRepo) 
            : base(_taskAssignmentRepo)
        {

        }
        
        [HttpPost("app/api/create-by-class")]
        public Task CreateByClassAsync(CreateUpdateTaskAssignmentByClassDto input)
        {
            throw new NotImplementedException();
        }

        [HttpPost("app/api/create-by-student")]
        public Task CreateByStudentAsync(CreateUpdateTaskAssignmentByStudentDto input)
        {
            throw new NotImplementedException();
        }

        [HttpPost("app/api/get-by-class")]
        public Task<PagingModel<TaskAssignmentDto>> GetByClassAsync(PageInfoRequestDto input)
        {
            throw new NotImplementedException();
        }

        [HttpPost("app/api/get-by-student")]
        public Task<PagingModel<TaskAssignmentDto>> GetByStudentAsync(PageInfoRequestDto input)
        {
            throw new NotImplementedException();
        }

        [HttpPut("app/api/update-by-class")]
        public Task UpdateByClassAsync(CreateUpdateTaskAssignmentByClassDto input)
        {
            throw new NotImplementedException();
        }

        [HttpPut("app/api/update-by-student")]
        public Task UpdateByStudentAsync(CreateUpdateTaskAssignmentByStudentDto input)
        {
            throw new NotImplementedException();
        }
    }
}

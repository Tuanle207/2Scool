﻿using Microsoft.EntityFrameworkCore;
using Scool.Common;
using Scool.Domain.Common;
using Scool.Infrastructure.AppService;
using Scool.Teachers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace Scool.TeachersAppService
{
    public class TeachersAppService : BasicCrudAppService<
        Teacher,
        Guid,
        TeacherDto,
        TeacherDto,
        CreateUpdateTeacherDto,
        CreateUpdateTeacherDto
    >, ITeachersAppService
    {
        private readonly IRepository<Teacher, Guid> _teachersRepo;

        public TeachersAppService(IRepository<Teacher, Guid> teachersRepo) : base(teachersRepo)
        {
            _teachersRepo = teachersRepo;
        }

        public async Task<IEnumerable<TeacherForSimpleListDto>> GetSimpleListAsync()
        {
            var items = await _teachersRepo
                .Include(x => x.FormClass)
                .Where(x => x.FormClass == null)
                .ToListAsync();
            return ObjectMapper.Map<List<Teacher>, List<TeacherForSimpleListDto>>(items);

        }
    }
}

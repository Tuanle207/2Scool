using Scool.Common;
using Scool.Infrastructure.Standard.AppService;
using System;
using System.Collections.Generic;
using System.Text;

namespace Scool.Grades
{
    public interface IGradesAppService : IBasicCrudAppService<
        Guid,
        GradeDto,
        GradeDto,
        CreateUpdateGradeDto,
        CreateUpdateGradeDto
    >
    {
    }
}

using System;
using System.Threading.Tasks;
using Scool.Common;
using Scool.Infrastructure.Standard.AppService;
using Scool.Infrastructure.Standard.Common;

namespace Scool.Application.Contracts.CoursesAppService
{
    public interface ICoursesAppService: IBasicCrudAppService<
        Guid,
        CourseDto,
        CourseListDto,
        CreateUpdateCourseDto,
        CreateUpdateCourseDto
     >
    {
        Task<PagingModel<CourseForSimpleListDto>> GetCoursesForSimpleList(PageInfoRequestDto input);
    }
}
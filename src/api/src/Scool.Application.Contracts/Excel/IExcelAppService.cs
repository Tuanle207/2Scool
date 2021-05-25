using Microsoft.AspNetCore.Http;
using Scool.Application.Contracts.Courses.Dtos;
using Scool.Application.Contracts.Excel.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Scool.Application.Contracts.Excel
{
    public interface IExcelAppService
    {
        public interface Response<CourseDto>
        {

        };
    }
}

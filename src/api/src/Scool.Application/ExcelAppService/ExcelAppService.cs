using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OfficeOpenXml;
using Scool.Application.Contracts.Courses.Dtos;
using Scool.Application.Contracts.Excel;
using Scool.Application.Contracts.Excel.Dtos;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Scool.ExcelAppService
{
    public class ExcelAppService : ScoolAppService, IExcelAppService
    {
        [HttpPost("import")]
        public async Task<Response<List<CourseDto>>> Import(IFormFile formFile, CancellationToken cancellationToken)
        {
            if (formFile == null || formFile.Length <= 0)
            {
                return Response<List<CourseDto>>.GetResult(-1, "formfile is empty");
            }

            if (!Path.GetExtension(formFile.FileName).Equals(".xlsx", StringComparison.OrdinalIgnoreCase))
            {
                return Response<List<CourseDto>>.GetResult(-1, "Not Support file extension");
            }

            var list = new List<CourseDto>();

            using (var stream = new MemoryStream())
            {
                await formFile.CopyToAsync(stream, cancellationToken);

                using (var package = new ExcelPackage(stream))
                {
                    ExcelWorksheet worksheet = package.Workbook.Worksheets[0];
                    var rowCount = worksheet.Dimension.Rows;

                    for (int row = 2; row <= rowCount; row++)
                    {
                        list.Add(new CourseDto
                        {
                            Name = worksheet.Cells[row, 1].Value.ToString().Trim(),
                            Description = worksheet.Cells[row, 2].Value.ToString().Trim(),
                            StartTime = DateTime.Now,
                            FinishTime = DateTime.Now.AddDays(10),
                        }); ; 
                        ;
                    }
                }
            }

            // add list to db ..  
            // here just read and return  
            Type type = typeof(CourseDto);
            int NumberOfRecords = type.GetProperties().Length;

            return Response<List<CourseDto>>.GetResult(NumberOfRecords, "OK", list);
        }
    }
}

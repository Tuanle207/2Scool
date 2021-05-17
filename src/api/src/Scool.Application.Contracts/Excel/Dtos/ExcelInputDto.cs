using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace Scool.Application.Contracts.Excel.Dtos
{
    public class ExcelInputDto
    {
        public string Title { get; set; }
        public string Test { get; set; }
        public IFormFile File1 { get; set; }
    }
}

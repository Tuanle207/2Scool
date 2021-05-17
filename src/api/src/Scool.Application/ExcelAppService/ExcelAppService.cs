using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Scool.Application.Contracts.Excel;
using Scool.Application.Contracts.Excel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Scool.ExcelAppService
{
    public class ExcelAppService : ScoolAppService, IExcelAppService
    {

        [HttpPost("/abc")]
        public string GetAllAsync([FromForm] ExcelInputDto input)
        {
            Console.WriteLine("GetAllAsync abcccccccccccc");
            Console.WriteLine(input.File1.FileName);
            Console.WriteLine(input.Test);
            return "ok";
        }
    }
}

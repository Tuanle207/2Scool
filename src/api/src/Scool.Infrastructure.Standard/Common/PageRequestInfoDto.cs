using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Scool.Infrastructure.Standard.Constants;

namespace Scool.Infrastructure.Standard.Common
{
    public class PageInfoRequestDto
    {
        public PageInfoRequestDto() { }

        [JsonPropertyName("pageIndex")]
        public int PageIndex { get; set; } = PageInfo.DefaultPageIndex;
        [JsonPropertyName("pageSize")]
        public int PageSize { get; set; } = PageInfo.DefaultPageSize;
        [JsonPropertyName("sortName")]
        public string SortName { get; set; }
        [JsonPropertyName("ascend")]
        public bool Ascend { get; set; }
        [JsonPropertyName("filter")]
        public IEnumerable<Filter> Filter { get; set; } = Array.Empty<Filter>();
    }
}
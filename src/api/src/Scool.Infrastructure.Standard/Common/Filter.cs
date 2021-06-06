using System.Text.Json.Serialization;

namespace Scool.Infrastructure.Standard.Common.X
{
    public class Filter
    {
        public Filter() { }
        [JsonPropertyName("key")]
        public string Key { get; set; }
        [JsonPropertyName("comparison")]
        public string Comparison { get; set; }
        [JsonPropertyName("value")]
        public string Value { get; set; }
    }
}
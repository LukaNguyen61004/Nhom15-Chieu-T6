using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace BE1.Models
{
    public class User
    {
        [BsonId] // Đánh dấu đây là khóa chính
        // Nếu trong DB là Int, hãy thử dùng dòng dưới đây:
        [BsonElement("_id")] 
        public object Id { get; set; } = string.Empty; // Có thể là string hoặc int tùy vào cách bạn thiết kế DB
        [BsonElement("name")]
        public string Name { get; set; }= string.Empty;
    }
}
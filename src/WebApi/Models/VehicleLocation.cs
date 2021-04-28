using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebApi.Models
{
    public class VehicleLocation
    {
        [BsonRepresentation(BsonType.ObjectId)] 
        public string LocationId { get; set; }
        public DateTime ArrivedAt { get; set; }
    }
}
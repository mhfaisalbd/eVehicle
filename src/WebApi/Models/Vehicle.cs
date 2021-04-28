using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebApi.Models
{
    public class Vehicle
    {
        public Vehicle()
        {
            Locations = new List<VehicleLocation>();
        }

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string VehicleType { get; set; }
        public int NoOfWheel { get; set; }
        public string RegNo { get; set; }
        public List<VehicleLocation> Locations { get; set; }
        
    }
}
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace WebApi.Models
{
    public class Driver
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string DriverName { get; set; }
        public string DrivingLicense { get; set; }

        [BsonRepresentation(BsonType.ObjectId)] 
        public string VehicleId { get; set; }
    }
}
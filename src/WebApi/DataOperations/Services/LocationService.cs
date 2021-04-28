using System.Collections.Generic;
using MongoDB.Driver;
using WebApi.Models;

namespace WebApi.DataOperations.Services
{
    public class LocationService
    {
        private readonly IMongoCollection<Location> _locations;

        public LocationService(IVehicleDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _locations = database.GetCollection<Location>(settings.LocationsCollectionName);
        }

        public List<Location> Get() =>
            _locations.Find(location => true).ToList();

        public Location Get(string id) =>
            _locations.Find<Location>(location => location.Id == id).FirstOrDefault();

        public Location Create(Location location)
        {
            _locations.InsertOne(location);
            return location;
        }

        public void Update(string id, Location locationIn) =>
            _locations.ReplaceOne(location => location.Id == id, locationIn);

        public void Remove(Location locationIn) =>
            _locations.DeleteOne(location => location.Id == locationIn.Id);

        public void Remove(string id) =>
            _locations.DeleteOne(location => location.Id == id);

    }
}
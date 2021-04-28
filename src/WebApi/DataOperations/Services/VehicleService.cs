using System.Collections.Generic;
using MongoDB.Driver;
using WebApi.Models;

namespace WebApi.DataOperations.Services
{
    public class VehicleService
    {
        private readonly IMongoCollection<Vehicle> _vehicles;

        public VehicleService(IVehicleDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _vehicles = database.GetCollection<Vehicle>(settings.VehiclesCollectionName);
        }

        public List<Vehicle> Get() =>
            _vehicles.Find(vehicle => true).ToList();

        public Vehicle Get(string id) =>
            _vehicles.Find<Vehicle>(vehicle => vehicle.Id == id).FirstOrDefault();

        public Vehicle Create(Vehicle vehicle)
        {
            _vehicles.InsertOne(vehicle);
            return vehicle;
        }

        public void Update(string id, Vehicle vehicleIn) =>
            _vehicles.ReplaceOne(vehicle => vehicle.Id == id, vehicleIn);

        public void Remove(Vehicle vehicleIn) =>
            _vehicles.DeleteOne(vehicle => vehicle.Id == vehicleIn.Id);

        public void Remove(string id) =>
            _vehicles.DeleteOne(vehicle => vehicle.Id == id);

    }
}
namespace WebApi.DataOperations
{
    
    public class VehicleDatabaseSettings : IVehicleDatabaseSettings
    {
        public string VehiclesCollectionName { get; set; }
        public string LocationsCollectionName { get; set; }
        public string DriversCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
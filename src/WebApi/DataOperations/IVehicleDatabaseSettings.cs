namespace WebApi.DataOperations
{
    public interface IVehicleDatabaseSettings
    {
        string VehiclesCollectionName { get; set; }
        string LocationsCollectionName { get; set; }
        string DriversCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
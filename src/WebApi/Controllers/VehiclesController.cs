using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using WebApi.DataOperations.Services;
using WebApi.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehiclesController : ControllerBase
    {
        private readonly VehicleService _vehicleService;

        public VehiclesController(VehicleService vehicleService)
        {
            _vehicleService = vehicleService;
        }

        [HttpGet]
        public ActionResult<List<Vehicle>> Get() =>
            _vehicleService.Get();

        [HttpGet("{id:length(24)}", Name = "GetVehicle")]
        public ActionResult<Vehicle> Get(string id)
        {
            var vehicle = _vehicleService.Get(id);

            if (vehicle == null)
            {
                return NotFound();
            }

            return vehicle;
        }

        [HttpPost]
        public ActionResult<Vehicle> Create(Vehicle vehicle)
        {
            vehicle.Id = ObjectId.GenerateNewId().ToString();
            _vehicleService.Create(vehicle);

            return CreatedAtRoute("GetVehicle", new { id = vehicle.Id.ToString() }, vehicle);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Vehicle vehicleIn)
        {
            var vehicle = _vehicleService.Get(id);

            if (vehicle == null)
            {
                return NotFound();
            }

            _vehicleService.Update(id, vehicleIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var vehicle = _vehicleService.Get(id);

            if (vehicle == null)
            {
                return NotFound();
            }

            _vehicleService.Remove(vehicle.Id);

            return NoContent();
        }
    }
}

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
    public class DriversController : ControllerBase
    {
        private readonly DriverService _driverService;

        public DriversController(DriverService driverService)
        {
            _driverService = driverService;
        }

        [HttpGet]
        public ActionResult<List<Driver>> Get() =>
            _driverService.Get();

        [HttpGet("{id:length(24)}", Name = "GetDriver")]
        public ActionResult<Driver> Get(string id)
        {
            var driver = _driverService.Get(id);

            if (driver == null)
            {
                return NotFound();
            }

            return driver;
        }

        [HttpPost]
        public ActionResult<Driver> Create(Driver driver)
        {
            driver.Id = ObjectId.GenerateNewId().ToString();
            _driverService.Create(driver);

            return CreatedAtRoute("GetDriver", new { id = driver.Id.ToString() }, driver);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Driver driverIn)
        {
            var driver = _driverService.Get(id);

            if (driver == null)
            {
                return NotFound();
            }

            _driverService.Update(id, driverIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var driver = _driverService.Get(id);

            if (driver == null)
            {
                return NotFound();
            }

            _driverService.Remove(driver.Id);

            return NoContent();
        }
    }
}

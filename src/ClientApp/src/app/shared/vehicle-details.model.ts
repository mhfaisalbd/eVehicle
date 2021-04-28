import { VehicleLocation } from "./vehicle-location.model";

export class VehicleDetails {
  id: string = "";
  vehicleType: string="";
  noOfWheel: number=0;
  regNo: string = "";
  locations: VehicleLocation[] = [];
}

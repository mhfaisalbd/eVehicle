import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DriverDetails } from './driver-details.model';
import { VehicleDetails } from './vehicle-details.model';
import { KeyValue } from '@angular/common';
import { ValueTransformer } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class DriverDetailsService {

  constructor(public http: HttpClient) { }

  readonly baseURL = "http://localhost:5000/api/Drivers";
  readonly vehicleEndpoint = "http://localhost:5000/api/Vehicles";
  formData: DriverDetails = new DriverDetails();
  list: DriverDetails[];
  vehicleList: VehicleDetails[];

  refreshList(){
    this.http.get(this.baseURL).toPromise()
    .then(res => this.list = res as DriverDetails[]);
    
    this.http.get(this.vehicleEndpoint).toPromise()
    .then(res => this.vehicleList = res as VehicleDetails[]);
  }
  getVehicle(id: string){
    return this.vehicleList.find(p=>p.id === id)?.regNo;
  }
  postDriverDetails(){
    return this.http.post(this.baseURL, this.formData);
  }
  putDriverDetails(){
    return this.http.put(`${this.baseURL}/${this.formData.id}`, this.formData);
  }
  deleteDriverDetails(id: string){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LocationDetails } from './location-details.model';

@Injectable({
  providedIn: 'root'
})
export class LocationDetailsService {

  constructor(public http: HttpClient) { }

  readonly baseURL = "http://localhost:5000/api/Locations";
  formData: LocationDetails = new LocationDetails();
  list: LocationDetails[];

  refreshList(){
    this.http.get(this.baseURL).toPromise()
    .then(res => this.list = res as LocationDetails[]);
  }

  postLocationDetails(){
    return this.http.post(this.baseURL, this.formData);
  }
  putLocationDetails(){
    return this.http.put(`${this.baseURL}/${this.formData.id}`, this.formData);
  }
  deleteLocationDetails(id: string){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}

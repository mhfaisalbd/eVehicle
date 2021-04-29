import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocationDetails } from '../shared/location-details.model';
import { LocationDetailsService } from '../shared/location-details.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styles: [
  ]
})
export class LocationDetailsComponent implements OnInit {

  constructor(public service: LocationDetailsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: LocationDetails){
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(id:string){
    if(confirm("Are you sure to delete this record?"))
    this.service.deleteLocationDetails(id).subscribe(
      res=>{
        this.service.refreshList();
        this.toastr.error('Deleted Drug Details', 'Success!')
      },
      err=>{
        console.log(err);
      }
    );
  }

}

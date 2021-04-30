import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DriverDetails } from '../shared/driver-details.model';
import { DriverDetailsService } from '../shared/driver-details.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styles: [
  ]
})
export class DriverDetailsComponent implements OnInit {

  constructor(public service: DriverDetailsService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: DriverDetails){
    this.service.formData = Object.assign({}, selectedRecord);
  }
  onDelete(id:string){
    if(confirm("Are you sure to delete this record?"))
    this.service.deleteDriverDetails(id).subscribe(
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

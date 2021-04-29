import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LocationDetails } from 'src/app/shared/location-details.model';
import { LocationDetailsService } from 'src/app/shared/location-details.service';

@Component({
  selector: 'app-location-details-form',
  templateUrl: './location-details-form.component.html',
  styles: [
  ]
})
export class LocationDetailsFormComponent implements OnInit {

  constructor(public service: LocationDetailsService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  resetForm(form: NgForm){
    form.form.reset();
    this.service.formData = new LocationDetails();
  }

  onSubmit(form: NgForm){
    if(this.service.formData.id === ""){
        this.insertData(form);
    }
    else{

    }
  }

  insertData(form: NgForm){
    this.service.postLocationDetails().subscribe(
      res =>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success("Added Location Details", "Success!")
      },
      err=>{
        console.log(err);
      }
    )
  }
  updateData(form: NgForm){
    this.service.putLocationDetails().subscribe(
      res =>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info("Updated Location Details", "Success!")
      },
      err=>{
        console.log(err);
      }
    )
  }

}

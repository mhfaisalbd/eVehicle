import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DriverDetails } from 'src/app/shared/driver-details.model';
import { DriverDetailsService } from 'src/app/shared/driver-details.service';

@Component({
  selector: 'app-driver-details-form',
  templateUrl: './driver-details-form.component.html',
  styles: [
  ]
})
export class DriverDetailsFormComponent implements OnInit {

  constructor(public service: DriverDetailsService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  resetForm(form: NgForm){
    form.form.reset();
    this.service.formData = new DriverDetails();
  }

  onSubmit(form: NgForm){
    if(this.service.formData.id === ""){
        this.insertData(form);
    }
    else{
      this.updateData(form);
    }
  }

  insertData(form: NgForm){
    this.service.postDriverDetails().subscribe(
      res =>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success("Added Driver Details", "Success!")
      },
      err=>{
        console.log(err);
      }
    )
  }
  updateData(form: NgForm){
    this.service.putDriverDetails().subscribe(
      res =>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info("Updated Driver Details", "Success!")
      },
      err=>{
        console.log(err);
      }
    )
  }

}

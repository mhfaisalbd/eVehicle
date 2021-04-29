import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LocationDetailsFormComponent } from './location-details/location-details-form/location-details-form.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleDetailsFormComponent } from './vehicle-details/vehicle-details-form/vehicle-details-form.component';
import { VehicleLocationFormComponent } from './vehicle-details/vehicle-location-form/vehicle-location-form.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { DriverDetailsFormComponent } from './driver-details/driver-details-form/driver-details-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LocationDetailsComponent,
    LocationDetailsFormComponent,
    VehicleDetailsComponent,
    VehicleDetailsFormComponent,
    VehicleLocationFormComponent,
    DriverDetailsComponent,
    DriverDetailsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

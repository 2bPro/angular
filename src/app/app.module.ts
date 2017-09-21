import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotosListComponent } from './photos/photos-list/photos-list.component';
import { PhotosDetailComponent } from './photos/photos-detail/photos-detail.component';
import { PhotosLocationComponent } from './photos/photos-list/photos-location/photos-location.component';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { LocationsEditComponent } from './locations-list/locations-edit/locations-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhotosComponent,
    PhotosListComponent,
    PhotosDetailComponent,
    PhotosLocationComponent,
    LocationsListComponent,
    LocationsEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {ImgUploadComponent } from './img-upload/img-upload.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ ImgUploadComponent ],

})
export class ImagesModule { }

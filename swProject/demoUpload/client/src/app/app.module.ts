import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { ImageUploadModule } from "angular2-image-upload";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ImgService } from './server/controllers/img.service';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ImageUploadModule.forRoot(),
  ],
  providers: [
    ImgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

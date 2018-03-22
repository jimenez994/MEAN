import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageUploadModule } from "angular2-image-upload";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginBodyComponent } from './login-body/login-body.component';
import { RegistrationComponent } from './login-body/registration/registration.component';
import { LoginComponent } from './login-body/login/login.component';
import { PorfolioBodyComponent } from './porfolio-body/porfolio-body.component';
import { NavbarComponent } from './porfolio-body/navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { UserService } from './server/controllers/user.service';
import { ImgUploadComponent } from './admin/img-upload/img-upload.component';
import { ImageService } from './server/controllers/image.service';
import { HeaderComponent } from './admin/header/header.component';
import { HeaderEditComponent } from './admin/header-edit/header-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginBodyComponent,
    RegistrationComponent,
    LoginComponent,
    PorfolioBodyComponent,
    NavbarComponent,
    AdminComponent,
    ImgUploadComponent,
    HeaderComponent,
    HeaderEditComponent,
    
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ImageUploadModule.forRoot(),

  ],
  providers: [
    UserService,
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginBodyComponent } from './login-body/login-body.component';
import { LoginComponent } from './login-body/login/login.component';
import { RegistrationComponent } from './login-body/registration/registration.component';
import { UserService } from './server/controllers/user.service';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './body/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginBodyComponent,
    LoginComponent,
    RegistrationComponent,
    BodyComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginBodyComponent } from './login-body/login-body.component';
import { RegistrationComponent } from './login-body/registration/registration.component';
import { LoginComponent } from './login-body/login/login.component';
import { PorfolioBodyComponent } from './porfolio-body/porfolio-body.component';
import { NavbarComponent } from './porfolio-body/navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { UserService } from './server/controllers/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginBodyComponent,
    RegistrationComponent,
    LoginComponent,
    PorfolioBodyComponent,
    NavbarComponent,
    AdminComponent,
  ],
  imports: [
    NgbModule.forRoot(),
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

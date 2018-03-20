import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginBodyComponent } from './login-body/login-body.component';
import { RegistrationComponent } from './login-body/registration/registration.component';
import { LoginComponent } from './login-body/login/login.component';
import { PorfolioBodyComponent } from './porfolio-body/porfolio-body.component';
import { NavbarComponent } from './porfolio-body/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginBodyComponent,
    RegistrationComponent,
    LoginComponent,
    PorfolioBodyComponent,
    NavbarComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

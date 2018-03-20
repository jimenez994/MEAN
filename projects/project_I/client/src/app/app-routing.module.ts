import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginBodyComponent } from './login-body/login-body.component';
import { RegistrationComponent } from './login-body/registration/registration.component';
import { PorfolioBodyComponent } from './porfolio-body/porfolio-body.component';
import { NavbarComponent } from './porfolio-body/navbar/navbar.component';

const routes: Routes = [
  {
    path:'admin', component: LoginBodyComponent, children: [
      { path:'', component: RegistrationComponent }
    ]
  },
  {
    path:'', component: PorfolioBodyComponent, children: [
      { path:'', component: NavbarComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

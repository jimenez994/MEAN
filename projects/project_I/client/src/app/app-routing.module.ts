import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginBodyComponent } from './login-body/login-body.component';
import { RegistrationComponent } from './login-body/registration/registration.component';

const routes: Routes = [
  {
    path:'admin', component: LoginBodyComponent, children: [
      { path:'', component: RegistrationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path : '', pathMatch: 'full', redirectTo: 'login' },
  { path : 'login', component : LoginComponent },
  { path : 'dashboard', component :  DashboardComponent },
  { path : 'signup', component : RegisterUserComponent },
  { path : 'forgot-password', component : ForgotPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

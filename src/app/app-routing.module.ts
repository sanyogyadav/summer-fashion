import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: AdminAuthComponent,
    path: 'admin-auth'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

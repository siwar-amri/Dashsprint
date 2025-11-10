// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { HomeComponent } from './demo/pages/authentication/home/home.component';
import  servicesComponent  from './demo/pages/authentication/services_page/services.component';
import  UserProfileComponent from './demo/user-profile/user-profile.component';
import { contactComponent } from './demo/pages/authentication/contact/contact';

import { AuthenticationRoutingModule } from './demo/pages/authentication/authentication-routing.module';
import { DefaultComponent } from './demo/default/default.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: '/default', pathMatch: 'full' },
      { path: 'default', component: DefaultComponent },
      { path: 'user-profile', component: UserProfileComponent }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: UserProfileComponent },
      { path: 'services', component: servicesComponent },
      { path: 'contact', component: contactComponent },
      { path: 'guest', loadChildren: () => import('./demo/pages/authentication/authentication-routing.module').then(m => m.AuthenticationRoutingModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

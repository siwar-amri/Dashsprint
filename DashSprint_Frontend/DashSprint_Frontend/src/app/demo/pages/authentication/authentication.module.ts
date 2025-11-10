import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignupComponent } from './register/register.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthenticationRoutingModule,]
})
export class AuthenticationModule {}


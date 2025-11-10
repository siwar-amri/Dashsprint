import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './register.component.html',
    standalone: false
})
export class SignupComponent {
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {}

  onSignUp() {
    // Collect the form data
    const signupData = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    };

    console.log('Form data:', signupData);

    // Call the AuthService to handle the backend request
    this.authService.register(signupData).subscribe(response => {
      console.log('Signup success:', response);
      // Redirect to login page after successful signup
      this.router.navigate(['/default/']);
    }, error => {
      console.log('Signup error:', error);
    });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: false
})
export class LoginComponent {
  email: string = '';  // Two-way binding for email
  password: string = ''; // Two-way binding for password
  rememberMe: boolean = false;  // Two-way binding for remember me
  errorMessage: string = '';  // To show error message if login fails

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    // Validate form fields if needed
    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter both email and password';
      return;
    }

    const loginData = {
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe
    };

    // Call AuthService to perform login
    this.authService.login(loginData).subscribe({
      next: (response) => {
        if (response === 'Authenticated') {
          // Redirect to home page on successful authentication
          this.router.navigate(['/default/']);
        } else {
          this.errorMessage = 'Invalid email or password.';
        }
      },
      error: (error) => {
        // Handle error if login fails
        console.log('Login error:', error);
        this.errorMessage = 'Login failed. Please try again.';
      }
    });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../../model/login/login.model';
import { AuthService } from '../service/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onLogin(): void {
    const loginRequest: LoginRequest = {
      username: this.username,
      password: this.password,
    };

    this.authService.login(loginRequest).subscribe({
      next: (response) => {

        console.log(response)
        this.authService.saveAccessTokenAndRefreshToken(response);
        this.router.navigate(["/"]);
      },
      error: (error) => {
        alert('Username ou Password errado, por favor, tente novamente.');
      },
      complete: () => {
        console.log('Login attempt completed');
      }
    });
  }
}

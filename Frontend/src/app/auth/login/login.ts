import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../../core/auth';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  email = '';
  password = '';
  role = 'user'; // Default to user role
  error: string | null = null;

  constructor(private api: Auth, private router: Router) {}

  onLogin() {
    this.error = null;
    this.api.login({ email: this.email, password: this.password, role: this.role })
      .subscribe({
        next: (res: any) => {
          localStorage.setItem('token', res.access_token);
          localStorage.setItem('role', res.role);
          this.router.navigate([res.role === 'admin' ? '/admin/dashboard' : '/public/home']);
        },
        error: (err) => {
          this.error = err?.error?.message || 'Login failed. Please check your credentials.';
        }
      });
  }
}

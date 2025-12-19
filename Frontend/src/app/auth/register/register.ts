import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../../core/auth';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {
  name = '';
  email = '';
  password = '';
  error: string | null = null;

  constructor(private api: Auth, private router: Router) {}

  onRegister() {
    this.error = null;
    // Default all new registrations to 'user' role
    this.api.register({ name: this.name, email: this.email, password: this.password, role: 'user' })
      .subscribe({
        next: () => this.router.navigate(['/login']),
        error: (err) => {
          const msg = err?.error?.message || '';
          this.error = msg || 'Registration failed.';
        }
      });
  }

}

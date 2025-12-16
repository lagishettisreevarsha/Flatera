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
  role = '';
  error: string | null = null;

  constructor(private api: Auth, private router: Router) {}

  onRegister() {
    this.error = null;
    if (!this.role) {
      this.error = 'Please select a role.';
      return;
    }
    this.api.register({ name: this.name, email: this.email, password: this.password, role: this.role })
      .subscribe({
        next: () => this.router.navigate(['/login']),
        error: (err) => {
          const msg = err?.error?.message || '';
          this.error = msg || 'Registration failed.';
        }
      });
  }

}

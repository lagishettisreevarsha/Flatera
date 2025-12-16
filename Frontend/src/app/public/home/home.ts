import { Component, OnInit } from '@angular/core';
import { Auth } from '../../core/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
   imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  flats: any[] = [];
  constructor(private api: Auth, private router: Router) {}
  ngOnInit() {
    this.api.getFlats().subscribe((data: any) => this.flats = data);
  }
  book(id: number) {
    this.api.requestBooking(id).subscribe(() => alert('Requested'));
  }
  onLogout() {
    this.api.logout();
    this.router.navigate(['/login']);
  }
}

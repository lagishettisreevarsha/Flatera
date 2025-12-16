import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth } from '../../core/auth';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookings.html',
  styleUrls: ['./bookings.css'],
})
export class Bookings implements OnInit {
  bookings: any[] = [];
  constructor(private api: Auth) {}
  ngOnInit() { this.load(); }
  load() {
    this.api.getPendingBookings().subscribe((d: any) => this.bookings = d);
  }
  approve(b: any) {
    this.api.approveBooking(b.id).subscribe(() => this.load());
  }
  decline(b: any) {
    this.api.declineBooking(b.id).subscribe(() => this.load());
  }
}

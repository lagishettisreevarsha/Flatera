import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({ providedIn: 'root' })
export class Auth{
  constructor(private http: HttpClient, private configService: ConfigService) {}

  get apiUrl(): string {
    return this.configService.apiUrl;
  }

  register(data: any) {
    return this.http.post(`${this.apiUrl}/auth/register`, data);
  }

  login(data: any) {
    return this.http.post(`${this.apiUrl}/auth/login`, data);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  getFlats() {
    return this.http.get(`${this.apiUrl}/public/flats`);
  }

  getFlatDetails(flatId: string) {
    return this.http.get(`${this.apiUrl}/public/flats/${flatId}`);
  }

  requestBooking(flatId: number) {
    return this.http.post(`${this.apiUrl}/public/book/${flatId}`, {});
  }

  getMyBookings() {
    return this.http.get(`${this.apiUrl}/public/bookings`);
  }

  getPendingBookings() {
    return this.http.get(`${this.apiUrl}/admin/bookings`);
  }
  approveBooking(bookingId: number) {
    return this.http.post(`${this.apiUrl}/admin/booking/${bookingId}/approve`, {});
  }
  declineBooking(bookingId: number) {
    return this.http.post(`${this.apiUrl}/admin/booking/${bookingId}/decline`, {});
  }

  getTowers() {
    return this.http.get(`${this.apiUrl}/admin/towers`);
  }
  createTower(data: { name: string }) {
    return this.http.post(`${this.apiUrl}/admin/towers`, data);
  }
  updateTower(towerId: number, data: { name: string }) {
    return this.http.put(`${this.apiUrl}/admin/towers/${towerId}`, data);
  }
  deleteTower(towerId: number) {
    return this.http.delete(`${this.apiUrl}/admin/towers`, { body: { tower_id: towerId } });
  }

  getAdminFlats() {
    return this.http.get(`${this.apiUrl}/admin/flats`);
  }
  

  addFlat(data: any) {
    return this.http.post(`${this.apiUrl}/admin/flats`, data);
  }
  updateFlat(flatId: number, data: any) {
    return this.http.put(`${this.apiUrl}/admin/flats/${flatId}`, data);
  }
  deleteFlat(flatId: number) {
    return this.http.delete(`${this.apiUrl}/admin/flats/${flatId}`);
  }

  getAmenities() {
    return this.http.get(`${this.apiUrl}/admin/amenities`);
  }
  addAmenity(data: any) {
    return this.http.post(`${this.apiUrl}/admin/amenities`, data);
  }
  updateAmenity(amenityId: number, data: { name: string }) {
    return this.http.put(`${this.apiUrl}/admin/amenities/${amenityId}`, data);
  }
  deleteAmenity(amenityId: number) {
    return this.http.delete(`${this.apiUrl}/admin/amenities/${amenityId}`);
  }

  getTenants() {
    return this.http.get(`${this.apiUrl}/admin/tenants`);
  }

  getPublicAmenities() {
    return this.http.get(`${this.apiUrl}/public/amenities`);
  }
}

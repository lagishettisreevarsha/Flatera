import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../core/auth';

@Component({
  selector: 'app-amenities',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './amenities.html',
  styleUrls: ['./amenities.css']
})
export class AmenitiesComponent implements OnInit {
  amenities: any[] = [];
  newAmenity: any = { name: '', description: '' };
  editingAmenity: any = null;
  error: string | null = null;
  success: string | null = null;

  constructor(private auth: Auth) {}

  ngOnInit(): void {
    this.loadAmenities();
  }

  loadAmenities(): void {
    this.auth.getAmenities().subscribe({
      next: (data: any) => {
        this.amenities = data;
        this.error = null;
      },
      error: (err: any) => {
        this.error = 'Failed to load amenities: ' + (err.error?.message || err.message);
        this.success = null;
      }
    });
  }

  addAmenity(): void {
    if (!this.newAmenity.name.trim()) {
      this.error = 'Amenity name is required';
      return;
    }
    this.auth.addAmenity(this.newAmenity).subscribe({
      next: () => {
        this.success = 'Amenity added successfully';
        this.error = null;
        this.newAmenity = { name: '', description: '' };
        this.loadAmenities();
      },
      error: (err: any) => {
        this.error = 'Failed to add amenity: ' + (err.error?.message || err.message);
        this.success = null;
      }
    });
  }

  editAmenity(amenity: any): void {
    this.editingAmenity = { ...amenity };
  }

  updateAmenity(): void {
    if (!this.editingAmenity || !this.editingAmenity.name.trim()) {
      this.error = 'Amenity name is required';
      return;
    }
    this.auth.updateAmenity(this.editingAmenity.id, this.editingAmenity).subscribe({
      next: () => {
        this.success = 'Amenity updated successfully';
        this.error = null;
        this.editingAmenity = null;
        this.loadAmenities();
      },
      error: (err: any) => {
        this.error = 'Failed to update amenity: ' + (err.error?.message || err.message);
        this.success = null;
      }
    });
  }

  cancelEdit(): void {
    this.editingAmenity = null;
  }

  deleteAmenity(id: number): void {
    this.auth.deleteAmenity(id).subscribe({
      next: () => {
        this.success = 'Amenity deleted successfully';
        this.error = null;
        this.loadAmenities();
      },
      error: (err: any) => {
        this.error = 'Failed to delete amenity: ' + (err.error?.message || err.message);
        this.success = null;
      }
    });
  }
}
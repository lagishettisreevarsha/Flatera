import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../core/auth';

@Component({
  selector: 'app-flats',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './flats.html',
  styleUrls: ['./flats.css']
})
export class FlatsComponent implements OnInit {
  flats: any[] = [];
  towers: any[] = [];
  newFlat: any = { tower_id: null, flat_no: '', bedrooms: '', sqft: '', rent: '', is_available: true };
  editingFlat: any = null;
  error: string | null = null;
  success: string | null = null;

  constructor(private auth: Auth) {}

  ngOnInit(): void {
  this.loadTowers();
}


  loadFlats(): void {
    this.auth.getFlats().subscribe({
      next: (data: any) => {
        this.flats = data;
        this.error = null;
      },
      error: (err: any) => {
        this.error = 'Failed to load flats: ' + (err.error?.message || err.message);
        this.success = null;
      }
    });
  }

 loadTowers(): void {
  this.auth.getTowers().subscribe({
    next: (data: any) => {
      this.towers = data;
      this.loadFlats(); // load flats AFTER towers
    },
    error: (err: any) => {
      this.error = 'Failed to load towers';
    }
  });
}


  addFlat(): void {
    if (!this.newFlat.tower_id || !this.newFlat.flat_no.trim()) {
      this.error = 'Tower and flat number are required';
      return;
    }
    
    const flatData = {
      ...this.newFlat,
      bedrooms: parseInt(this.newFlat.bedrooms) || 1,
      sqft: parseInt(this.newFlat.sqft) || 0,
      rent: parseInt(this.newFlat.rent) || 0
    };
    
    this.auth.addFlat(flatData).subscribe({
      next: () => {
        this.success = 'Flat added successfully';
        this.error = null;
        this.newFlat = { tower_id: null, flat_no: '', bedrooms: '', sqft: '', rent: '', is_available: true };
        this.loadFlats();
      },
      error: (err: any) => {
        this.error = 'Failed to add flat: ' + (err.error?.message || err.message);
        this.success = null;
      }
    });
  }

  editFlat(flat: any): void {
    this.editingFlat = { ...flat };
  }

  updateFlat(): void {
    if (!this.editingFlat || !this.editingFlat.tower_id || !this.editingFlat.flat_no.trim()) {
      this.error = 'Tower and flat number are required';
      return;
    }
    this.auth.updateFlat(this.editingFlat.id, this.editingFlat).subscribe({
      next: () => {
        this.success = 'Flat updated successfully';
        this.error = null;
        this.editingFlat = null;
        this.loadFlats();
      },
      error: (err: any) => {
        this.error = 'Failed to update flat: ' + (err.error?.message || err.message);
        this.success = null;
      }
    });
  }

  cancelEdit(): void {
    this.editingFlat = null;
  }

  deleteFlat(id: number): void {
    console.log('Deleting flat with ID:', id);
    this.auth.deleteFlat(id).subscribe({
      next: () => {
        this.success = 'Flat deleted successfully';
        this.error = null;
        this.loadFlats();
      },
      error: (err: any) => {
        console.error('Delete error:', err);
        this.error = 'Failed to delete flat: ' + (err.error?.message || err.message);
        this.success = null;
      }
    });
  }

  getTowerName(towerId: number): string {
    const tower = this.towers.find(t => t.id === towerId);
    return tower ? tower.name : 'Unknown';
  }
}
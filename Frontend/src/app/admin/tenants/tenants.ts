import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth } from '../../core/auth';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tenants.html',
  styleUrls: ['./tenants.css']
})
export class Tenants implements OnInit {
  tenants: any[] = [];
  constructor(private api: Auth) {}
  ngOnInit() { this.load(); }
  load() {
    this.api.getTenants().subscribe((d: any) => this.tenants = d);
  }
}

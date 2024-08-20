// src/app/system/vehicle-list/vehicle-list.component.ts
import { Component, OnInit } from '@angular/core';
import { StarWarsApiService } from '../../shared/services/star-wars-api.service';
import { Vehicle } from '../../shared/models/vehicle.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  vehicles: Vehicle[] = [];

  constructor(private apiService: StarWarsApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getVehicles().subscribe(data => {
      this.vehicles = data;
    });
  }

  viewVehicle(id: number): void {
    this.router.navigate(['/vehicles', id]);
  }
}


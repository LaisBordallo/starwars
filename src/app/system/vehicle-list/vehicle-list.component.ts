// src/app/system/vehicle-list/vehicle-list.component.ts
import { Component, OnInit } from '@angular/core';
import { StarWarsApiService } from '../../shared/services/star-wars-api.service';
import { Vehicle } from '../../shared/models/vehicle.model';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[] = [];

  constructor(private starWarsApiService: StarWarsApiService) {}

  ngOnInit(): void {
    this.starWarsApiService.getVehicles().subscribe({
      next: (data: any) => {
        console.log('Vehicle data:', data); // Log para verificar a resposta
        if (data && Array.isArray(data.results)) {
          this.vehicles = data.results;
        } else {
          console.error('Unexpected response structure:', data);
        }
      },
      error: (err) => console.error('Error fetching vehicles:', err)
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsApiService } from '../../shared/services/star-wars-api.service';
import { VehicleDetail } from '../../shared/models/vehicle-detail.model'; // Atualize conforme necessário

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {
  vehicleId: string | null = null;
  vehicleDetail: VehicleDetail | undefined; // Atualize conforme necessário

  constructor(
    private route: ActivatedRoute,
    private starWarsApiService: StarWarsApiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.vehicleId = params.get('id');
      if (this.vehicleId) {
        this.loadVehicleDetails();
      }
    });
  }

  loadVehicleDetails(): void {
    if (this.vehicleId) {
      this.starWarsApiService.getVehicleDetail(Number(this.vehicleId)).subscribe({
        next: (data: VehicleDetail) => {
          console.log('Vehicle detail data:', data);
          this.vehicleDetail = data;
        },
        error: (err) => console.error('Error fetching vehicle details:', err)
      });
    }
  }
}
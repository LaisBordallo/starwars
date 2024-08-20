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

  vehicle?: VehicleDetail;

  constructor(private route: ActivatedRoute, private apiService: StarWarsApiService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getVehicleDetail(+id).subscribe(data => {
        this.vehicle = data;
      });
    }
  }
}

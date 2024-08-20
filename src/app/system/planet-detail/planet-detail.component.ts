// src/app/system/planet-detail/planet-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsApiService } from '../../shared/services/star-wars-api.service';
import { PlanetDetail } from '../../shared/models/planet-detail.model';
@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {

  planet?: PlanetDetail;

  constructor(private route: ActivatedRoute, private apiService: StarWarsApiService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getPlanetDetail(+id).subscribe(data => {
        this.planet = data;
      });
    }
  }
}

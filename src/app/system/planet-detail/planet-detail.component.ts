// src/app/system/planet-detail/planet-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsApiService } from '../../shared/services/star-wars-api.service';
import { Planet } from '../../shared/models/planet.model';
import { PlanetDetail } from '../../shared/models/planet-detail.model'; // Certifique-se de que o modelo está correto

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {
  planetId: string | null = null;
  planetDetail: PlanetDetail | undefined; // Certifique-se de que este é o modelo correto

  constructor(
    private route: ActivatedRoute,
    private starWarsApiService: StarWarsApiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.planetId = params.get('id');
      if (this.planetId) {
        this.loadPlanetDetails();
      }
    });
  }

  loadPlanetDetails(): void {
    if (this.planetId) {
      this.starWarsApiService.getPlanetDetail(Number(this.planetId)).subscribe({
        next: (data: PlanetDetail) => {
          console.log('Planet detail data:', data);
          this.planetDetail = data;
        },
        error: (err) => console.error('Error fetching planet details:', err)
      });
    }
  }
}

// src/app/system/planet-detail/planet-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsApiService } from '../../shared/services/star-wars-api.service';
import { Planet } from '../../shared/models/planet.model';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {
  planetId: number | null = null;
  planet: Planet | undefined;

  constructor(
    private route: ActivatedRoute,
    private starWarsApiService: StarWarsApiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.planetId = Number(params.get('id'));
      this.loadPlanetDetails();
    });
  }

  loadPlanetDetails(): void {
    if (this.planetId !== null) {
      this.starWarsApiService.getStarshipDetail(this.planetId).subscribe({
        next: (data: Planet) => {
          console.log('Planet detail data:', data);
          this.planet = data;
        },
        error: (err) => console.error('Error fetching planet details:', err)
      });
    }
  }
}

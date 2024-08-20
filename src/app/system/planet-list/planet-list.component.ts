import { Component, OnInit } from '@angular/core';
import { StarWarsApiService } from '../../shared/services/star-wars-api.service';
import { Planet } from '../../shared/models/planet.model';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {
  planets: Planet[] = [];

  constructor(private starWarsApiService: StarWarsApiService) {}

  ngOnInit(): void {
    this.starWarsApiService.getPlanets().subscribe({
      next: (data: any) => {
        console.log('Planet data:', data);
        if (data && Array.isArray(data.results)) {
          this.planets = data.results;
        } else {
          console.error('Unexpected response structure:', data);
        }
      },
      error: (err) => console.error('Error fetching planets:', err)
    });
  }
}

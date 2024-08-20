import { Component, OnInit } from '@angular/core';
import { StarWarsApiService } from '../../shared/services/star-wars-api.service';
import { Planet } from '../../shared/models/planet.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {

  planets: Planet[] = [];

  constructor(private apiService: StarWarsApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getPlanets().subscribe(data => {
      this.planets = data;
    });
  }

  viewPlanet(id: number): void {
    this.router.navigate(['/planets', id]);
  }
}

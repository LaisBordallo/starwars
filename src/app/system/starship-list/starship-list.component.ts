// src/app/system/starship-list/starship-list.component.ts
import { Component, OnInit } from '@angular/core';
import { StarWarsApiService } from '../../shared/services/star-wars-api.service';
import { Starship } from '../../shared/models/starship.model';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.scss']
})
export class StarshipListComponent implements OnInit {
  starships: Starship[] = [];

  constructor(private starWarsApiService: StarWarsApiService) {}

  ngOnInit(): void {
    this.starWarsApiService.getStarships().subscribe({
      next: (data: any) => {
        console.log('Starship data:', data); // Log para verificar a resposta
        if (data && Array.isArray(data.results)) {
          this.starships = data.results;
        } else {
          console.error('Unexpected response structure:', data);
        }
      },
      error: (err) => console.error('Error fetching starships:', err)
    });
  }
}

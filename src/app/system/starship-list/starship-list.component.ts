// src/app/system/starship-list/starship-list.component.ts
import { Component, OnInit } from '@angular/core';
import { StarWarsApiService } from '../../shared/services/star-wars-api.service';
import { Starship } from '../../shared/models/starship.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.scss']
})
export class StarshipListComponent implements OnInit {

  starships: Starship[] = [];

  constructor(private apiService: StarWarsApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getStarships().subscribe(data => {
      this.starships = data;
    });
  }

  viewStarship(id: number): void {
    this.router.navigate(['/starships', id]);
  }
}
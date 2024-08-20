// src/app/system/species-list/species-list.component.ts
import { Component, OnInit } from '@angular/core';
import { StarWarsApiService } from '../../shared/services/star-wars-api.service';
import { Species } from '../../shared/models/species.model';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.scss']
})
export class SpeciesListComponent implements OnInit {
  species: Species[] = [];

  constructor(private starWarsApiService: StarWarsApiService) {}

  ngOnInit(): void {
    this.starWarsApiService.getSpecies().subscribe((data: Species[]) => {
      this.species = data;
    });
  }
}

// src/app/system/species-list/species-list.component.ts
import { Component, OnInit } from '@angular/core';
import { StarWarsApiService } from '../../shared/services/star-wars-api.service';
import { Species } from '../../shared/models/species.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.scss']
})
export class SpeciesListComponent implements OnInit {

  speciesList: Species[] = [];

  constructor(private apiService: StarWarsApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getSpecies().subscribe(data => {
      this.speciesList = data;
    });
  }

  viewSpecies(id: number): void {
    this.router.navigate(['/species', id]);
  }
}


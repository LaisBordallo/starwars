import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsApiService } from '../../shared/services/star-wars-api.service';
import { Species } from '../../shared/models/species.model';

@Component({
  selector: 'app-species-detail',
  templateUrl: './species-detail.component.html',
  styleUrls: ['./species-detail.component.scss']
})
export class SpeciesDetailComponent implements OnInit {
  speciesId: string | null = null;
  species: Species[] | undefined;

  constructor(
    private route: ActivatedRoute,
    private starWarsApiService: StarWarsApiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.speciesId = params.get('id');
      if (this.speciesId) {
        this.loadSpeciesDetails();
      }
    });
  }

  loadSpeciesDetails(): void {
    if (this.speciesId) {
      this.starWarsApiService.getSpecies(this.speciesId).subscribe({
        next: (data: Species[]) => {
          console.log('Species detail data:', data); // Log para verificar a resposta
          this.species = data;
        },
        error: (err) => console.error('Error fetching species details:', err)
      });
    }
  }
}

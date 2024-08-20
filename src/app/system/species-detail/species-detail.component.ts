import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsApiService } from '../../shared/services/star-wars-api.service';
import { SpeciesDetail } from '../../shared/models/species-detail.model'; // Atualize conforme necessário

@Component({
  selector: 'app-species-detail',
  templateUrl: './species-detail.component.html',
  styleUrls: ['./species-detail.component.scss']
})
export class SpeciesDetailComponent implements OnInit {
  speciesId: string | null = null;
  speciesDetail: SpeciesDetail | undefined; // Atualize conforme necessário

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
      this.starWarsApiService.getSpeciesDetail(Number(this.speciesId)).subscribe({
        next: (data: SpeciesDetail) => {
          console.log('Species detail data:', data);
          this.speciesDetail = data;
        },
        error: (err) => console.error('Error fetching species details:', err)
      });
    }
  }
}

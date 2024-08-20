import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsApiService } from '../../shared/services/star-wars-api.service';
import { StarshipDetail } from '../../shared/models/starship-detail.model'; // Atualize conforme necessário

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss']
})
export class StarshipDetailComponent implements OnInit {
  starshipId: string | null = null;
  starshipDetail: StarshipDetail | undefined; // Atualize conforme necessário

  constructor(
    private route: ActivatedRoute,
    private starWarsApiService: StarWarsApiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.starshipId = params.get('id');
      if (this.starshipId) {
        this.loadStarshipDetails();
      }
    });
  }

  loadStarshipDetails(): void {
    if (this.starshipId) {
      this.starWarsApiService.getStarshipDetail(Number(this.starshipId)).subscribe({
        next: (data: StarshipDetail) => {
          console.log('Starship detail data:', data);
          this.starshipDetail = data;
        },
        error: (err) => console.error('Error fetching starship details:', err)
      });
    }
  }
}
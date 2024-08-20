import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsApiService } from '../../shared/services/star-wars-api.service';
import { FilmDetail } from '../../shared/models/film-detail.model';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {
  filmId: string | null = null;
  film: FilmDetail | undefined;

  constructor(
    private route: ActivatedRoute,
    private starWarsApiService: StarWarsApiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.filmId = params.get('id');
      if (this.filmId) {
        this.loadFilmDetails();
      }
    });
  }

  loadFilmDetails(): void {
    if (this.filmId) {
      this.starWarsApiService.getFilmDetail(Number(this.filmId)).subscribe({
        next: (data: FilmDetail) => {
          console.log('Film detail data:', data); // Log para verificar a resposta
          this.film = data;
        },
        error: (err) => console.error('Error fetching film details:', err)
      });
    }
  }
}

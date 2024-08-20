// src/app/system/film-list/film-list.component.ts
import { Component, OnInit } from '@angular/core';
import { StarWarsApiService } from '../../shared/services/star-wars-api.service';
import { Film } from '../../shared/models/film.model';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  films: Film[] = [];

  constructor(private starWarsApiService: StarWarsApiService) {}

  ngOnInit(): void {
    this.starWarsApiService.getFilms().subscribe((data: Film[]) => {
      this.films = data;
    });
  }
}

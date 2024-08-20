// src/app/system/film-list/film-list.component.ts
import { Component, OnInit } from '@angular/core';
import { StarWarsApiService } from '../../shared/services/star-wars-api.service';
import { Film } from '../../shared/models/film.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  films: Film[] = [];

  constructor(private apiService: StarWarsApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getFilms().subscribe(data => {
      this.films = data;
    });
  }

  viewFilm(id: number): void {
    this.router.navigate(['/films', id]);
  }
}
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

  film?: FilmDetail;

  constructor(private route: ActivatedRoute, private apiService: StarWarsApiService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getFilmDetail(+id).subscribe(data => {
        this.film = data;
      });
    }
  }
}
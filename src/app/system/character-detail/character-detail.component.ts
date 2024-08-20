// src/app/system/character-detail/character-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsApiService } from '../../shared/services/star-wars-api.service';
import { CharacterDetail } from '../../shared/models/character-detail.model';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  character?: CharacterDetail;

  constructor(private route: ActivatedRoute, private apiService: StarWarsApiService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getCharacterDetail(+id).subscribe(data => {
        this.character = data;
      });
    }
  }
}


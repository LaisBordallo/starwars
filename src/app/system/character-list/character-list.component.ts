// src/app/system/character-list/character-list.component.ts
import { Component, OnInit } from '@angular/core';
import { StarWarsApiService } from '../../shared/services/star-wars-api.service';
import { Character } from '../../shared/models/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];

  constructor(private starWarsApiService: StarWarsApiService) {}

  ngOnInit(): void {
    this.starWarsApiService.getPeople().subscribe((data: Character[]) => {
      this.characters = data;
    });
  }
}

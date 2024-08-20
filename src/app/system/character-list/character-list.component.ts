import { Component, OnInit } from '@angular/core';
import { StarWarsApiService } from '../../shared/services/star-wars-api.service';
import { Character } from '../../shared/models/character.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [];

  constructor(private apiService: StarWarsApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getPeople().subscribe(data => {
      this.characters = data;
    });
  }

  viewCharacter(id: number): void {
    this.router.navigate(['/characters', id]);
  }
}


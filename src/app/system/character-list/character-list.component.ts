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
    this.starWarsApiService.getPeople().subscribe({
      next: (data: any) => {
        console.log('Character data:', data);
        if (data && Array.isArray(data.results)) {
          this.characters = data.results;
        } else {
          console.error('Unexpected response structure:', data);
        }
      },
      error: (err) => console.error('Error fetching characters:', err)
    });
  }
}

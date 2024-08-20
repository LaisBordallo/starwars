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
  character: CharacterDetail | null = null;
  characterId: number | null = null;

  constructor(
    private starWarsApiService: StarWarsApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.characterId = +params['id']; // Obtém o ID do parâmetro da URL
      if (this.characterId) {
        this.loadCharacterDetails();
      }
    });
  }

  loadCharacterDetails(): void {
    if (this.characterId !== null) {
      this.starWarsApiService.getCharacterDetail(this.characterId).subscribe({
        next: (data: CharacterDetail) => {
          console.log('Character detail data:', data); // Log para verificar a resposta
          this.character = data;
        },
        error: (err) => console.error('Error fetching character details:', err)
      });
    }
  }
}

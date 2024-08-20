import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsApiService } from '../../shared/services/star-wars-api.service';
import { SpeciesDetail } from '../../shared/models/species-detail.model'; // Atualize conforme necessário

@Component({
  selector: 'app-species-detail',
  templateUrl: './species-detail.component.html',
  styleUrls: ['./species-detail.component.scss']
})
export class SpeciesDetailComponent implements OnInit {

  species?: SpeciesDetail;

  constructor(private route: ActivatedRoute, private apiService: StarWarsApiService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getSpeciesDetail(+id).subscribe(data => {
        this.species = data;
      });
    }
  }
}

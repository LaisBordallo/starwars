// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './system/character-list/character-list.component';
import { FilmListComponent } from './system/film-list/film-list.component';
import { SpeciesListComponent } from './system/species-list/species-list.component';
import { VehicleListComponent } from './system/vehicle-list/vehicle-list.component';
import { PlanetListComponent } from './system/planet-list/planet-list.component';
import { StarshipListComponent } from './system/starship-list/starship-list.component';
// Importar outros componentes conforme necessário

const routes: Routes = [
  { path: 'people', component: CharacterListComponent },
  { path: 'films', component: FilmListComponent },
  { path: 'species', component: SpeciesListComponent },
  { path: 'vehicles', component: VehicleListComponent },
  { path: 'planet', component: PlanetListComponent },
  { path: 'starships', component: StarshipListComponent },
  
  // Adicionar rotas para outros componentes (Planets, Starships, etc.)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

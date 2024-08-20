// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { CharacterListComponent } from './system/character-list/character-list.component';
import { CharacterDetailComponent } from './system/character-detail/character-detail.component';
import { PlanetListComponent } from './system/planet-list/planet-list.component';
import { StarshipListComponent } from './system/starship-list/starship-list.component';
import { FilmListComponent } from './system/film-list/film-list.component';
import { FilmDetailComponent } from './system/film-detail/film-detail.component';
import { SpeciesListComponent } from './system/species-list/species-list.component';
import { SpeciesDetailComponent } from './system/species-detail/species-detail.component';
import { VehicleListComponent } from './system/vehicle-list/vehicle-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharacterListComponent },
  { path: 'characters/:id', component: CharacterDetailComponent },
  { path: 'planets', component: PlanetListComponent },
  { path: 'starships', component: StarshipListComponent },
  { path: 'films', component: FilmListComponent },
  { path: 'films/:id', component: FilmDetailComponent },
  { path: 'species', component: SpeciesListComponent },
  { path: 'species/:id', component: SpeciesDetailComponent },
  { path: 'vehicles', component: VehicleListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

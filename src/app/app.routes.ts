// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { SidelistComponent } from './layout/sidelist/sidelist.component';
import { CharacterListComponent } from './system/character-list/character-list.component';
import { CharacterDetailComponent } from './system/character-detail/character-detail.component';
import { PlanetListComponent } from './system/planet-list/planet-list.component';
import { StarshipListComponent } from './system/starship-list/starship-list.component';
import { FilmListComponent } from './system/film-list/film-list.component';
import { FilmDetailComponent } from './system/film-detail/film-detail.component';
import { SpeciesListComponent } from './system/species-list/species-list.component';
import { SpeciesDetailComponent } from './system/species-detail/species-detail.component';
import { VehicleListComponent } from './system/vehicle-list/vehicle-list.component'
import { VehicleDetailComponent } from './system/vehicle-detail/vehicle-detail.component';
import { PlanetDetailComponent } from './system/planet-detail/planet-detail.component';
import { StarshipDetailComponent } from './system/starship-detail/starship-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sidelist', component: SidelistComponent },
  { path: 'characters', component: CharacterListComponent },
  { path: 'characters/:id', component: CharacterDetailComponent },
  { path: 'planets', component: PlanetListComponent },
  { path: 'planets/:id', component: PlanetDetailComponent },
  { path: 'starships', component: StarshipListComponent },
  { path: 'starships/:id', component: StarshipDetailComponent },
  { path: 'films', component: FilmListComponent },
  { path: 'films/:id', component: FilmDetailComponent },
  { path: 'species', component: SpeciesListComponent },
  { path: 'species/:id', component: SpeciesDetailComponent },
  { path: 'vehicles', component: VehicleListComponent },
  { path: 'vehicles/:id', component: VehicleDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

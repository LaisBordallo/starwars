// src/app/shared/services/star-wars-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';
import { Planet } from '../models/planet.model';
import { Starship } from '../models/starship.model';
import { Film } from '../models/film.model';
import { Species } from '../models/species.model';
import { Vehicle } from '../models/vehicle.model';
import { CharacterDetail } from '../models/character-detail.model';
import { FilmDetail } from '../models/film-detail.model';
import { PlanetDetail } from '../models/planet-detail.model';
import { SpeciesDetail } from '../models/species-detail.model';
import { StarshipDetail } from '../models/starship-detail.model';
import { VehicleDetail } from '../models/vehicle-detail.model';

@Injectable({
  providedIn: 'root'
})
export class StarWarsApiService {
  
  private readonly baseUrl = 'https://swapi.dev/api';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/people/`);
  }

  getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(`${this.baseUrl}/planets/`);
  }

  getStarships(): Observable<Starship[]> {
    return this.http.get<Starship[]>(`${this.baseUrl}/starships/`);
  }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.baseUrl}/films/`);
  }

  getSpecies(): Observable<Species[]> {
    return this.http.get<Species[]>(`${this.baseUrl}/species/`);}


  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.baseUrl}/vehicles/`);
  }

  getCharacterDetail(id: number): Observable<CharacterDetail> {
    return this.http.get<CharacterDetail>(`${this.baseUrl}/people/${id}/`);
  }

  getFilmDetail(id: number): Observable<FilmDetail> {
    return this.http.get<FilmDetail>(`${this.baseUrl}/people/${id}/`);
  }
  
  getPlanetDetail(id: number): Observable<PlanetDetail> {
    return this.http.get<PlanetDetail>(`${this.baseUrl}/planets/${id}/`);
  }

  getSpeciesDetail(id: number): Observable<SpeciesDetail> {
    return this.http.get<SpeciesDetail>(`${this.baseUrl}/people/${id}/`);
  }

  getStarshipDetail(id: number): Observable<StarshipDetail> {
    return this.http.get<StarshipDetail>(`${this.baseUrl}/people/${id}/`);
  }

  getVehicleDetail(id: number): Observable<VehicleDetail> {
    return this.http.get<VehicleDetail>(`${this.baseUrl}/people/${id}/`);
  }
}

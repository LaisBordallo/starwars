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
    return this.http.get<Species[]>(`${this.baseUrl}/species/`);
  }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.baseUrl}/vehicles/`);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  urlPokemon = 'https://pokeapi.co/api/v2/pokemon/';

  getPokemon() {
    return this.http.get(this.urlPokemon);
  }
}

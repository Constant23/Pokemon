import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {

  pokemonListes: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { this.initPokemon(); }

  ngOnInit() {
  }

  searchPokemonClick(nameSearch) {
    this.pokemonService.getPokemonByIdName(nameSearch)
      .subscribe((data) => {
        /* tslint:disable:no-string-literal*/
        this.pokemonListes = data['forms'];
        console.log(data['forms']);
      });
  }

  initPokemon() {

    this.pokemonService.getPokemon()
      .subscribe((data) => {
        /* tslint:disable:no-string-literal*/
        this.pokemonListes = data['results'];
        console.log(data);
      });
  }

}

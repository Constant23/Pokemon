import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../pokemon';
import {PokemonService} from '../pokemon.service';




@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  selected: any;
  filtered: any;

  pokdemo: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {
    this.showPokemon();
  }

  id = '';
  searchString: string = '';


  ngOnInit() {
  }

  onOptionsSelected() {
    console.log(this.selected);
    this.filtered = this.pokdemo.filter(t => t.name === this.selected.name);

  }

  goclick() {
    console.log(this.pokdemo.filter((e) => {
      return e.name.toLowerCase().indexOf(this.searchString.toLowerCase()) !== -1;
    }));
  }


  showPokemon() {
    this.pokemonService.getPokemon()
      .subscribe((data) => {
        /* tslint:disable:no-string-literal*/
        this.pokdemo = data['results'];
      });
  }


}

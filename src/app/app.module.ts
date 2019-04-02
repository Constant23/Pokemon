import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';

import { FormsModule } from '@angular/forms';
import {FilterPokemonPipe} from './filter-pokemon.pipe';
import {HttpClientModule} from '@angular/common/http';
import {PokemonService} from './pokemon.service';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import {RouterModule, Routes} from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FilterPokemonPipe,
    PokemonSearchComponent,
    PokemonDetailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

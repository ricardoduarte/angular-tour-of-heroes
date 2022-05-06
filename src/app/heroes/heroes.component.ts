import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Hero } from '../models/hero.model';
import { AppState } from '../state/app.state';
import { selectHeroesList } from '../state/heroes.selectors';
import { loadHeroes, createHero, deleteHero } from '../state/heroes.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.getHeroes();
    this.store.select(selectHeroesList)
      .subscribe(heroes => this.heroes = heroes);
  }

  getHeroes(): void {
    this.store.dispatch(loadHeroes());
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.store.dispatch(createHero({ hero: { name } as Hero }));
  }

  delete(hero: Hero): void {
    this.store.dispatch(deleteHero({ heroId: hero.id }));
  }
}

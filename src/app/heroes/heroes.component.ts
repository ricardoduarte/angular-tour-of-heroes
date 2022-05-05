import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Hero } from '../models/hero.model';
import { HeroService } from '../hero.service';
import { AppState } from '../state/app.state';
import { selectHeroesList } from '../state/heroes.selectors';
import { loadHeroes } from '../state/heroes.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
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
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}

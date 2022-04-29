import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';

import { Hero } from '../models/hero.model';
import { HeroService } from '../hero.service';
// import { selectState } from '../state/heroes.selectors';
import { loadHeroes } from '../state/heroes.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // heroes$: Observable<Hero[]>;
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.getHeroes();
    console.log(this.store);
    const result = this.store.select((state) => state);
    result.subscribe(data => {
      console.log(data);
    });
    console.log(result);
    // this.heroes$ = this.store.select(selectHeroes);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.store.dispatch(loadHeroes({ heroes })));
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

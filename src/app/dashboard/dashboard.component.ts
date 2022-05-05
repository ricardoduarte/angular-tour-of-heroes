import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Hero } from '../models/hero.model';
import { AppState } from '../state/app.state';
import { loadHeroes } from '../state/heroes.actions';
import { selectHeroesList } from '../state/heroes.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getHeroes();
    this.store.select(selectHeroesList)
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  getHeroes(): void {
    this.store.dispatch(loadHeroes());
  }
}
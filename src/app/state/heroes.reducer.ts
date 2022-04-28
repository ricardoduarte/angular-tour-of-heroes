import { createReducer, on } from '@ngrx/store';

// import { HeroActionTypes } from './heroes.actions';
import { loadHeroes } from './heroes.actions';
import { Hero } from '../models/hero.model';

export interface HeroState {
  heroes: Hero[];
  hero: Hero;
  status: boolean;
  error: string
}

export const initialState: HeroState = {
  heroes: [],
  hero: {} as Hero,
  status: false,
  error: ""
};

export const collectionReducer = createReducer(
  initialState,
  on(loadHeroes, (state, { heroes }) => {
    console.log(heroes);
    return state;
  })
);

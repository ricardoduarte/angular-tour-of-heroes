import { createReducer, on } from '@ngrx/store';

// import { HeroActionTypes } from './heroes.actions';
import { loadHeroes } from './heroes.actions';
import { Hero } from '../models/hero.model';

export interface HeroState {
  list: Hero[];
  hero: Hero;
  status: boolean;
  error: string
}

export const initialState: HeroState = {
  list: [],
  hero: {} as Hero,
  status: false,
  error: ""
};

export const heroesReducer = createReducer(
  initialState,
  on(loadHeroes, (state, { heroes }) => {
    return {...state, list: heroes};
  })
);

import { createReducer, on } from '@ngrx/store';

import { loadHeroes, loadHeroesSuccess, loadHeroesFail } from './heroes.actions';
import { Hero } from '../models/hero.model';

enum Status {
  SUCCESS = "success",
  FAILED = "failed",
  LOADING = "loading",
  NOT_STARTED = "not_started"
}

export interface HeroState {
  list: Hero[];
  hero: Hero;
  status: Status;
  error: string
}

export const initialState: HeroState = {
  list: [],
  hero: {} as Hero,
  status: Status.NOT_STARTED,
  error: ""
};

export const heroesReducer = createReducer(
  initialState,
  on(loadHeroes, (state) => {
    return {...state, status: Status.LOADING};
  }),
  on(loadHeroesSuccess, (state, { heroes }) => {
    return {...state, status: Status.SUCCESS, list: heroes};
  }),
  on(loadHeroesFail, (state, { error }) => {
    return {...state, status: Status.FAILED, error};
  }),
);

import { createReducer, on } from '@ngrx/store';

import * as heroActions from './heroes.actions';
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
  on(heroActions.loadHeroes, (state) => {
    return {...state, status: Status.LOADING};
  }),
  on(heroActions.loadHeroesSuccess, (state, { heroes }) => {
    return {...state, status: Status.SUCCESS, list: heroes};
  }),
  on(heroActions.loadHeroesFail, (state, { error }) => {
    return {...state, status: Status.FAILED, error};
  }),
  on(heroActions.loadHero, (state) => {
    return {...state, status: Status.LOADING};
  }),
  on(heroActions.loadHeroSuccess, (state, { hero }) => {
    return {...state, status: Status.SUCCESS, hero};
  }),
  on(heroActions.loadHeroFail, (state, { error }) => {
    return {...state, status: Status.FAILED, error};
  }),
  on(heroActions.createHero, (state) => {
    return {...state, status: Status.LOADING};
  }),
  on(heroActions.createHeroSuccess, (state, { hero }) => {
    return {...state, status: Status.SUCCESS, list: [...state.list, hero]};
  }),
  on(heroActions.createHeroFail, (state, { error }) => {
    return {...state, status: Status.FAILED, error};
  }),
  on(heroActions.updateHero, (state) => {
    return {...state, status: Status.LOADING};
  }),
  on(heroActions.updateHeroSuccess, (state, { hero }) => {
    const heroIndex = state.list.findIndex(o => o.id === hero.id);
    let newHeroesList = [...state.list];
    newHeroesList[heroIndex] = hero;
    return {
      ...state,
      status: Status.SUCCESS,
      hero,
      list: newHeroesList
    };
  }),
  on(heroActions.updateHeroFail, (state, { error }) => {
    return {...state, status: Status.FAILED, error};
  }),
  on(heroActions.deleteHero, (state) => {
    return {...state, status: Status.LOADING};
  }),
  on(heroActions.deleteHeroSuccess, (state, { heroId }) => {
    return {
      ...state, status: Status.SUCCESS, list: state.list.filter(h => h.id !== heroId)
    };
  }),
  on(heroActions.deleteHeroFail, (state, { error }) => {
    return {...state, status: Status.FAILED, error};
  }),
);

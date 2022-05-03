import { createSelector } from '@ngrx/store';

import { AppState } from './app.state';
import { HeroState } from './heroes.reducer';

export const selectHeroesState = (state: AppState) => state.heroes;

export const selectHeroesList = createSelector(
  selectHeroesState,
  (state: HeroState) => state.list
);

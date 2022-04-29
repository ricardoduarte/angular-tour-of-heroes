import { createSelector } from '@ngrx/store';

import { AppState } from './app.state';
import { HeroState } from './heroes.reducer';
// import { Hero } from '../models/hero.model';

export const selectState = (state: AppState) => state;

// export const selectHeroes = createSelector(
//   selectHeroesState,
//   (state: HeroState) => state.heroes
// );

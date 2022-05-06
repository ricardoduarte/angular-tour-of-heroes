import { createAction, props } from '@ngrx/store';
import { Hero } from '../models/hero.model';

/**
 * Action Types
 */
export enum HeroActionTypes {
  LoadHeroes = '[Hero] Load Heroes',
  LoadHeroesSuccess = '[Hero] Load Heroes Success',
  LoadHeroesFail = '[Hero] Load Heroes Fail',

  LoadHero = '[Hero] Load Hero',
  LoadHeroSuccess = '[Hero] Load Hero Success',
  LoadHeroFail = '[Hero] Load Hero Fail',

  CreateHero = '[Hero] Create Hero',
  CreateHeroSuccess = '[Hero] Create Hero Success',
  CreateHeroFail = '[Hero] Create Hero Fail',

  UpdateHero = '[Hero] Update Hero',
  UpdateHeroSuccess = '[Hero] Update Hero Success',
  UpdateHeroFail = '[Hero] Update Hero Fail',

  DeleteHero = '[Hero] Delete Hero',
  DeleteHeroSuccess = '[Hero] Delete Hero Success',
  DeleteHeroFail = '[Hero] Delete Hero Fail',
}

export const loadHeroes = createAction(
  HeroActionTypes.LoadHeroes
);

export const loadHeroesSuccess = createAction(
  HeroActionTypes.LoadHeroesSuccess,
  props<{ heroes: Array<Hero> }>()
);

export const loadHeroesFail = createAction(
  HeroActionTypes.LoadHeroesFail,
  props<{ error: string }>()
);

export const loadHero = createAction(
  HeroActionTypes.LoadHero,
  props<{ heroId: number }>()
);

export const loadHeroSuccess = createAction(
  HeroActionTypes.LoadHeroSuccess,
  props<{ hero: Hero }>()
);

export const loadHeroFail = createAction(
  HeroActionTypes.LoadHeroFail,
  props<{ error: string }>()
);

export const createHero = createAction(
  HeroActionTypes.CreateHero,
  props<{ hero: Hero }>()
);

export const createHeroSuccess = createAction(
  HeroActionTypes.CreateHeroSuccess,
  props<{ hero: Hero }>()
);

export const createHeroFail = createAction(
  HeroActionTypes.CreateHeroFail,
  props<{ error: string }>()
);

export const updateHero = createAction(
  HeroActionTypes.UpdateHero,
  props<{ hero: Hero }>()
);

export const updateHeroSuccess = createAction(
  HeroActionTypes.UpdateHeroSuccess,
  props<{ hero: Hero }>()
);

export const updateHeroFail = createAction(
  HeroActionTypes.UpdateHero,
  props<{ error: string }>()
);

export const deleteHero = createAction(
  HeroActionTypes.DeleteHero
);

export const deleteHeroSuccess = createAction(
  HeroActionTypes.DeleteHeroSuccess,
  props<{ heroId: number }>()
);

export const deleteHeroFail = createAction(
  HeroActionTypes.DeleteHeroFail,
  props<{ error: string }>()
);

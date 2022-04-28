import { createAction, props } from '@ngrx/store';
import { Hero } from '../models/hero.model';

/**
 * Action Types
 */
export enum HeroActionTypes {
  LoadHeroes = '[Hero] Load Heroes',
  LoadHeroesSuccess = '[Hero] Load Heroes Success',
  LoadHeroesFail = '[Hero] Load Heroes Fail',

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
  HeroActionTypes.LoadHeroes,
  props<{ heroes: ReadonlyArray<Hero> }>()
);

export const createHero = createAction(
  HeroActionTypes.CreateHero,
  props<{ hero: Hero }>()
);

export const updateHero = createAction(
  HeroActionTypes.UpdateHero,
  props<{ heroName: string }>()
);

export const deleteHero = createAction(
  HeroActionTypes.DeleteHero,
  props<{ heroId: number }>()
);

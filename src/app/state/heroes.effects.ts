import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap, catchError, of } from 'rxjs';

import { HeroService } from '../hero.service';
import { HeroActionTypes, loadHero } from './heroes.actions';

@Injectable()
export class HeroEffects {
  constructor(
    private actions$: Actions,
    private heroService: HeroService
  ) {}

  loadHeroes$ = createEffect(() => this.actions$.pipe(
    ofType(HeroActionTypes.LoadHeroes),
    mergeMap(() => this.heroService.getHeroes()
      .pipe(
        map(heroes => ({ type: HeroActionTypes.LoadHeroesSuccess, heroes})),
        catchError(error => of({ type: HeroActionTypes.LoadHeroesFail, error}))
      ))
  ));

  loadHero$ = createEffect(() => this.actions$.pipe(
    ofType(HeroActionTypes.LoadHero),
    switchMap(({ heroId }) => this.heroService.getHero(heroId)
      .pipe(
        map(hero => ({ type: HeroActionTypes.LoadHeroSuccess, hero})),
        catchError(error => of({ type: HeroActionTypes.LoadHeroFail, error}))
      ))
  ));

  createHero$ = createEffect(() => this.actions$.pipe(
    ofType(HeroActionTypes.CreateHero),
    switchMap(({ hero }) => this.heroService.addHero(hero)
      .pipe(
        map(hero => ({ type: HeroActionTypes.CreateHeroSuccess, hero})),
        catchError(error => of({ type: HeroActionTypes.CreateHeroFail, error}))
      ))
  ));

  updateHero$ = createEffect(() => this.actions$.pipe(
    ofType(HeroActionTypes.UpdateHero),
    switchMap(({ hero }) => this.heroService.updateHero(hero)
      .pipe(
        map(_ => ({ type: HeroActionTypes.UpdateHeroSuccess, hero})),
        catchError(error => of({ type: HeroActionTypes.UpdateHeroFail, error}))
      ))
  ));
}

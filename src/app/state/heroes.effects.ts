import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, of } from 'rxjs';

import { HeroService } from '../hero.service';
import { HeroActionTypes } from './heroes.actions';

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
}

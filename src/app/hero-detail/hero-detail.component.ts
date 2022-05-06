import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Store } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { Hero } from '../models/hero.model';
import { HeroService } from '../hero.service';
import { loadHero } from '../state/heroes.actions';
import { selectHero } from '../state/heroes.selectors';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.store.select(selectHero)
      .subscribe(hero => this.hero = hero);
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(loadHero({ heroId: id }));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

}

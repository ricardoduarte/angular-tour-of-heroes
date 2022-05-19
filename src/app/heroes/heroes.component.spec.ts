import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { HeroesComponent } from './heroes.component';
import { AppState } from '../state/app.state';
import { initialState as heroInitialState } from '../state/heroes.reducer';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let mockStore: MockStore<AppState>;
  const initialState = { heroes: heroInitialState };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      providers: [provideMockStore({ initialState }),]
    })
    .compileComponents();

    mockStore = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

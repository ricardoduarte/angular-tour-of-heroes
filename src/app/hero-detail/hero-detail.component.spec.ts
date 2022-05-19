import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { HeroDetailComponent } from './hero-detail.component';
import { AppState } from '../state/app.state';
import { initialState as heroInitialState } from '../state/heroes.reducer';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let mockStore: MockStore<AppState>;
  const initialState = { heroes: heroInitialState };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDetailComponent ],
      imports: [
        RouterTestingModule.withRoutes([]),
        FormsModule,
      ],
      providers: [provideMockStore({ initialState }),]
    })
    .compileComponents();

    mockStore = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

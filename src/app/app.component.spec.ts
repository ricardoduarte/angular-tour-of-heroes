import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MessagesComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Tour of Heroes'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Tour of Heroes');
  });
});

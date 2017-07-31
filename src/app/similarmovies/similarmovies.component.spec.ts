import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarmoviesComponent } from './similarmovies.component';

describe('SimilarmoviesComponent', () => {
  let component: SimilarmoviesComponent;
  let fixture: ComponentFixture<SimilarmoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarmoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

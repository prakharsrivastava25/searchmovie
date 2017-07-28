import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificmovieComponent } from './specificmovie.component';

describe('SpecificmovieComponent', () => {
  let component: SpecificmovieComponent;
  let fixture: ComponentFixture<SpecificmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TWODComponent } from './twod.component';

describe('TWODComponent', () => {
  let component: TWODComponent;
  let fixture: ComponentFixture<TWODComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TWODComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TWODComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

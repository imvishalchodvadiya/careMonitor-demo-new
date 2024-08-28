import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCalculationComponent } from './date-calculation.component';

describe('DateCalculationComponent', () => {
  let component: DateCalculationComponent;
  let fixture: ComponentFixture<DateCalculationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateCalculationComponent]
    });
    fixture = TestBed.createComponent(DateCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

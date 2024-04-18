import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeGroupComponent } from './age-group.component';

describe('AgeGroupComponent', () => {
  let component: AgeGroupComponent;
  let fixture: ComponentFixture<AgeGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgeGroupComponent]
    });
    fixture = TestBed.createComponent(AgeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentlandsellerComponent } from './rentlandseller.component';

describe('RentlandsellerComponent', () => {
  let component: RentlandsellerComponent;
  let fixture: ComponentFixture<RentlandsellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentlandsellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentlandsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

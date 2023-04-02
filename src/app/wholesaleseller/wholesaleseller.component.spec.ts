import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalesellerComponent } from './wholesaleseller.component';

describe('WholesalesellerComponent', () => {
  let component: WholesalesellerComponent;
  let fixture: ComponentFixture<WholesalesellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WholesalesellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WholesalesellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

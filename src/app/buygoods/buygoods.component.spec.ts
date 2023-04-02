import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuygoodsComponent } from './buygoods.component';

describe('BuygoodsComponent', () => {
  let component: BuygoodsComponent;
  let fixture: ComponentFixture<BuygoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuygoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuygoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

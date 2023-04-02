import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalebidComponent } from './wholesalebid.component';

describe('WholesalebidComponent', () => {
  let component: WholesalebidComponent;
  let fixture: ComponentFixture<WholesalebidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WholesalebidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WholesalebidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

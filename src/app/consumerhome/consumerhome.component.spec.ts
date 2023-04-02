import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerhomeComponent } from './consumerhome.component';

describe('ConsumerhomeComponent', () => {
  let component: ConsumerhomeComponent;
  let fixture: ComponentFixture<ConsumerhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

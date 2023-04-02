import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandrentsComponent } from './landrents.component';

describe('LandrentsComponent', () => {
  let component: LandrentsComponent;
  let fixture: ComponentFixture<LandrentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandrentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandrentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

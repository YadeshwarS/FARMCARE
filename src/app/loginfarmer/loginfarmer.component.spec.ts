import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginfarmerComponent } from './loginfarmer.component';

describe('LoginfarmerComponent', () => {
  let component: LoginfarmerComponent;
  let fixture: ComponentFixture<LoginfarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginfarmerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginfarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

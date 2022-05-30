import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracaraComponent } from './caracara.component';

describe('CaracaraComponent', () => {
  let component: CaracaraComponent;
  let fixture: ComponentFixture<CaracaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

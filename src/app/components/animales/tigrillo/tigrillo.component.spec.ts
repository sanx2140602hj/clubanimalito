import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TigrilloComponent } from './tigrillo.component';

describe('TigrilloComponent', () => {
  let component: TigrilloComponent;
  let fixture: ComponentFixture<TigrilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TigrilloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TigrilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

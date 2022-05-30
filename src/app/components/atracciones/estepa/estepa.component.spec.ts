import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstepaComponent } from './estepa.component';

describe('EstepaComponent', () => {
  let component: EstepaComponent;
  let fixture: ComponentFixture<EstepaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstepaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstepaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

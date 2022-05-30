import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiebreComponent } from './liebre.component';

describe('LiebreComponent', () => {
  let component: LiebreComponent;
  let fixture: ComponentFixture<LiebreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiebreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiebreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

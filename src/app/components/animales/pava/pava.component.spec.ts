import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PavaComponent } from './pava.component';

describe('PavaComponent', () => {
  let component: PavaComponent;
  let fixture: ComponentFixture<PavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PavaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabraComponent } from './cabra.component';

describe('CabraComponent', () => {
  let component: CabraComponent;
  let fixture: ComponentFixture<CabraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

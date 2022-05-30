import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuitreComponent } from './buitre.component';

describe('BuitreComponent', () => {
  let component: BuitreComponent;
  let fixture: ComponentFixture<BuitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuitreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

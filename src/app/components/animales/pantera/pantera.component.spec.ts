import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanteraComponent } from './pantera.component';

describe('PanteraComponent', () => {
  let component: PanteraComponent;
  let fixture: ComponentFixture<PanteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanteraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

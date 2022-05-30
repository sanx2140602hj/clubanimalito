import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacatuaComponent } from './cacatua.component';

describe('CacatuaComponent', () => {
  let component: CacatuaComponent;
  let fixture: ComponentFixture<CacatuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CacatuaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CacatuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

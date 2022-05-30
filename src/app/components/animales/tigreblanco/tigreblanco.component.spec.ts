import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TigreblancoComponent } from './tigreblanco.component';

describe('TigreblancoComponent', () => {
  let component: TigreblancoComponent;
  let fixture: ComponentFixture<TigreblancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TigreblancoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TigreblancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

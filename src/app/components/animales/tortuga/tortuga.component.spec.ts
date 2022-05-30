import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TortugaComponent } from './tortuga.component';

describe('TortugaComponent', () => {
  let component: TortugaComponent;
  let fixture: ComponentFixture<TortugaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TortugaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TortugaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

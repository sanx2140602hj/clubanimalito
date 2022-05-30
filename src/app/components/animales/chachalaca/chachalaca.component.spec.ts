import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChachalacaComponent } from './chachalaca.component';

describe('ChachalacaComponent', () => {
  let component: ChachalacaComponent;
  let fixture: ComponentFixture<ChachalacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChachalacaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChachalacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

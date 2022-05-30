import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerpetarioComponent } from './herpetario.component';

describe('HerpetarioComponent', () => {
  let component: HerpetarioComponent;
  let fixture: ComponentFixture<HerpetarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerpetarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerpetarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuanacoComponent } from './guanaco.component';

describe('GuanacoComponent', () => {
  let component: GuanacoComponent;
  let fixture: ComponentFixture<GuanacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuanacoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuanacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsoComponent } from './oso.component';

describe('OsoComponent', () => {
  let component: OsoComponent;
  let fixture: ComponentFixture<OsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

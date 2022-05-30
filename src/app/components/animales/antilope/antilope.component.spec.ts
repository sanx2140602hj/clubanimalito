import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntilopeComponent } from './antilope.component';

describe('AntilopeComponent', () => {
  let component: AntilopeComponent;
  let fixture: ComponentFixture<AntilopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntilopeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntilopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

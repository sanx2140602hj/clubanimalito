import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OryxComponent } from './oryx.component';

describe('OryxComponent', () => {
  let component: OryxComponent;
  let fixture: ComponentFixture<OryxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OryxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OryxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

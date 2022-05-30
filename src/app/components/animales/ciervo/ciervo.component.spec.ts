import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiervoComponent } from './ciervo.component';

describe('CiervoComponent', () => {
  let component: CiervoComponent;
  let fixture: ComponentFixture<CiervoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiervoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiervoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

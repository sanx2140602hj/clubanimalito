import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemurComponent } from './lemur.component';

describe('LemurComponent', () => {
  let component: LemurComponent;
  let fixture: ComponentFixture<LemurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LemurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LemurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonosComponent } from './monos.component';

describe('MonosComponent', () => {
  let component: MonosComponent;
  let fixture: ComponentFixture<MonosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

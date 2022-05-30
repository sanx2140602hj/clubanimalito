import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AguilillaComponent } from './aguililla.component';

describe('AguilillaComponent', () => {
  let component: AguilillaComponent;
  let fixture: ComponentFixture<AguilillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AguilillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AguilillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

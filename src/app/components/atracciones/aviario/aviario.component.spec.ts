import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviarioComponent } from './aviario.component';

describe('AviarioComponent', () => {
  let component: AviarioComponent;
  let fixture: ComponentFixture<AviarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AviarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AviarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

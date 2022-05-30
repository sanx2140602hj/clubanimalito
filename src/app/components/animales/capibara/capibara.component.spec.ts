import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapibaraComponent } from './capibara.component';

describe('CapibaraComponent', () => {
  let component: CapibaraComponent;
  let fixture: ComponentFixture<CapibaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapibaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapibaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

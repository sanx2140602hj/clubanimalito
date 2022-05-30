import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuacamayaComponent } from './guacamaya.component';

describe('GuacamayaComponent', () => {
  let component: GuacamayaComponent;
  let fixture: ComponentFixture<GuacamayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuacamayaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuacamayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

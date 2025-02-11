import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgInfoComponent } from './arg-info.component';

describe('ArgInfoComponent', () => {
  let component: ArgInfoComponent;
  let fixture: ComponentFixture<ArgInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArgInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

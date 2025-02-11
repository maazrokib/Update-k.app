import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerofferComponent } from './farmeroffer.component';

describe('FarmerofferComponent', () => {
  let component: FarmerofferComponent;
  let fixture: ComponentFixture<FarmerofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerofferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

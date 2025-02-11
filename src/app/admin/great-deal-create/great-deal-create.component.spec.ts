import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatDealCreateComponent } from './great-deal-create.component';

describe('GreatDealCreateComponent', () => {
  let component: GreatDealCreateComponent;
  let fixture: ComponentFixture<GreatDealCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreatDealCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreatDealCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

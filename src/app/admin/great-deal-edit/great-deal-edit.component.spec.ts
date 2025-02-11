import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatDealEditComponent } from './great-deal-edit.component';

describe('GreatDealEditComponent', () => {
  let component: GreatDealEditComponent;
  let fixture: ComponentFixture<GreatDealEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreatDealEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreatDealEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

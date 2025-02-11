import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatDealListComponent } from './great-deal-list.component';

describe('GreatDealListComponent', () => {
  let component: GreatDealListComponent;
  let fixture: ComponentFixture<GreatDealListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreatDealListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreatDealListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

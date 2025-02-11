import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcFarmerComponent } from './pc-farmer.component';

describe('PcFarmerComponent', () => {
  let component: PcFarmerComponent;
  let fixture: ComponentFixture<PcFarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcFarmerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

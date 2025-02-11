import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerNavComponent } from './farmer-nav.component';

describe('FarmerNavComponent', () => {
  let component: FarmerNavComponent;
  let fixture: ComponentFixture<FarmerNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

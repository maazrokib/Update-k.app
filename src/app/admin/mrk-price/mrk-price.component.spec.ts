import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrkPriceComponent } from './mrk-price.component';

describe('MrkPriceComponent', () => {
  let component: MrkPriceComponent;
  let fixture: ComponentFixture<MrkPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrkPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrkPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

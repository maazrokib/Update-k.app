import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalCreateComponent } from './seasonal-create.component';

describe('SeasonalCreateComponent', () => {
  let component: SeasonalCreateComponent;
  let fixture: ComponentFixture<SeasonalCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonalCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

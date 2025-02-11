import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalEditComponent } from './seasonal-edit.component';

describe('SeasonalEditComponent', () => {
  let component: SeasonalEditComponent;
  let fixture: ComponentFixture<SeasonalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonalEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

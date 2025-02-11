import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalListComponent } from './seasonal-list.component';

describe('SeasonalListComponent', () => {
  let component: SeasonalListComponent;
  let fixture: ComponentFixture<SeasonalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonalListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

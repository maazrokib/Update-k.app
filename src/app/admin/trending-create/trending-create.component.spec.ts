import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingCreateComponent } from './trending-create.component';

describe('TrendingCreateComponent', () => {
  let component: TrendingCreateComponent;
  let fixture: ComponentFixture<TrendingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

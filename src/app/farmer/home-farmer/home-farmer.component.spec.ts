import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFarmerComponent } from './home-farmer.component';

describe('HomeFarmerComponent', () => {
  let component: HomeFarmerComponent;
  let fixture: ComponentFixture<HomeFarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFarmerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

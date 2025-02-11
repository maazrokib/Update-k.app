import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerofferlistComponent } from './farmerofferlist.component';

describe('FarmerofferlistComponent', () => {
  let component: FarmerofferlistComponent;
  let fixture: ComponentFixture<FarmerofferlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerofferlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerofferlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

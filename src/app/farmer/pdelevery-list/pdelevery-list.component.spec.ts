import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdeleveryListComponent } from './pdelevery-list.component';

describe('PdeleveryListComponent', () => {
  let component: PdeleveryListComponent;
  let fixture: ComponentFixture<PdeleveryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdeleveryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdeleveryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

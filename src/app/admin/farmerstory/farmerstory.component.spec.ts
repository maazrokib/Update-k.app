import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerstoryComponent } from './farmerstory.component';

describe('FarmerstoryComponent', () => {
  let component: FarmerstoryComponent;
  let fixture: ComponentFixture<FarmerstoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerstoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

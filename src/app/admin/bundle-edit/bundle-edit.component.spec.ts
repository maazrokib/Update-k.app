import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleEditComponent } from './bundle-edit.component';

describe('BundleEditComponent', () => {
  let component: BundleEditComponent;
  let fixture: ComponentFixture<BundleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BundleEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BundleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

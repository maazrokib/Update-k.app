import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleCreateComponent } from './bundle-create.component';

describe('BundleCreateComponent', () => {
  let component: BundleCreateComponent;
  let fixture: ComponentFixture<BundleCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BundleCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BundleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

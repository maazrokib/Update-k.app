import { TestBed } from '@angular/core/testing';

import { FarmerStoryService } from './farmer-story.service';

describe('FarmerStoryService', () => {
  let service: FarmerStoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerStoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

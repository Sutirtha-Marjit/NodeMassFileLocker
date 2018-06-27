import { TestBed, inject } from '@angular/core/testing';

import { GridDataHandlingService } from './grid-data-handling.service';

describe('GridDataHandlingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GridDataHandlingService]
    });
  });

  it('should be created', inject([GridDataHandlingService], (service: GridDataHandlingService) => {
    expect(service).toBeTruthy();
  }));
});

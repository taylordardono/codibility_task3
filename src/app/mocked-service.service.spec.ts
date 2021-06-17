import { TestBed } from '@angular/core/testing';

import { MockedServiceService } from './mocked-service.service';

describe('MockedServiceService', () => {
  let service: MockedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

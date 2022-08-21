import { TestBed } from '@angular/core/testing';

import { HelpOfferService } from './help-offer.service';

describe('HelpofferService', () => {
  let service: HelpOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

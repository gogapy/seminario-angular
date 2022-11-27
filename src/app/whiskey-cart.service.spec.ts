import { TestBed } from '@angular/core/testing';

import { WhiskeyCartService } from './whiskey-cart.service';

describe('WhiskeyCartService', () => {
  let service: WhiskeyCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhiskeyCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

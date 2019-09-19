import { TestBed } from '@angular/core/testing';

import { JwtAuthHttpInterceptService } from './jwt-auth-http-intercept.service';

describe('JwtAuthHttpInterceptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwtAuthHttpInterceptService = TestBed.get(JwtAuthHttpInterceptService);
    expect(service).toBeTruthy();
  });
});

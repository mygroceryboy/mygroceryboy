import { TestBed, inject } from '@angular/core/testing';

import { RegisterUserService } from './login-user.service';

describe('RegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterUserService]
    });
  });

  it('should be created', inject([RegisterUserService], (service: RegisterUserService) => {
    expect(service).toBeTruthy();
  }));
});

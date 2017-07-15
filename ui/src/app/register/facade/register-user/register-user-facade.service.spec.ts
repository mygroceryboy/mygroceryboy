import { TestBed, inject } from '@angular/core/testing';

import { RegisterUserFacadeService } from './register-user-facade.service';

describe('RegisterUserFacadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterUserFacadeService]
    });
  });

  it('should be created', inject([RegisterUserFacadeService], (service: RegisterUserFacadeService) => {
    expect(service).toBeTruthy();
  }));
});

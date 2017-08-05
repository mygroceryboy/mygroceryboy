import { TestBed, inject } from '@angular/core/testing';

import { StoreService } from './store.service';

describe('RegisterService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [StoreService]
        });
    });

    it('should be created', inject([StoreService], (service: StoreService) => {
        expect(service).toBeTruthy();
    }));
});

import { TestBed, inject } from '@angular/core/testing';

import { GroceryService } from './grocery.service';

describe('RegisterService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [GroceryService]
        });
    });

    it('should be created', inject([GroceryService], (service: GroceryService) => {
        expect(service).toBeTruthy();
    }));
});

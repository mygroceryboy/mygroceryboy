import { Component, OnInit, Input } from '@angular/core';
import { Store } from '../../../models/store.model';
import { Address } from '../../../models/base/address.model';

@Component({
    selector: 'app-store-item',
    templateUrl: './store-item.component.html',
    styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent implements OnInit {

    @Input()
    public store: Store;

    public constructor() { }

    public ngOnInit(): void {
    }
    
    private getAddress(address: Address): string {
        return Address.buildAddress(address);
    }
}

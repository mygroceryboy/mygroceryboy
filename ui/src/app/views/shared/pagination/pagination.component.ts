import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderType, FilterGroup } from "../../../models/filter.model";

@Component({
    selector: 'app-pagination-list',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

    @Input()
    public filterGroup: FilterGroup;

    @Input()
    public count: number;

    @Input()
    public orderByParams: Array<string>;

    @Output()
    public pageChanged : EventEmitter<any> = new EventEmitter();

    public constructor() { }

    public ngOnInit(): void {
        this.filterGroup.page = this.filterGroup.page || 1;
        this.filterGroup.size = this.filterGroup.size || 20;
        this.count = this.count || 0;
    }

    public onPaginationChanged(): void {
        this.pageChanged.next(this.filterGroup);
    }
}
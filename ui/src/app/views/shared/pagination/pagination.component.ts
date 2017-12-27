import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-pagination-list',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

    @Input()
    public count: number;

    @Input()
    public page: number;

    @Input()
    public size: number;

    @Output()
    public pageChanged : EventEmitter<any> = new EventEmitter();

    public constructor() { }

    public ngOnInit(): void {
        this.page = this.page || 1;
        this.size = this.size || 20;
        this.count = this.count || 0;
    }

    public onPaginationChanged(): void {
        this.pageChanged.next({
            count: this.count,
            page: this.page,
            size: parseInt(this.size.toString())
        });
    }
}
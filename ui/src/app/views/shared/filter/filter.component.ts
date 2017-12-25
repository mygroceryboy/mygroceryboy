import { Component, OnInit, Input, Output, ElementRef } from '@angular/core';
import { Filter } from "../../../models/filter.model";

@Component({
    selector: 'app-list-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

    @Output()
    public filter: Filter;
    @Input()
    public filterJson: any;
    private filterTypes: Array<string>;

    public constructor(private elementRef: ElementRef) { }

    public ngOnInit(): void {
    }

    private updateSearchFilter(): void {
        console.log("asdasd");
    }

    private filterList() {
        this.filter = this.filter || new Filter();
        let searchInputs: Array<HTMLInputElement> = this.elementRef.nativeElement.querySelectorAll('paper-input');
        searchInputs.forEach((element: HTMLInputElement) => {
            this.filter.updateSearchFilter(element.dataset.searchKey, element.value);
        });
        console.log(JSON.stringify(this.filter));
    }

    private resetList() {

    }
}
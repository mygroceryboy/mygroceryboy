import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { FilterGroup, Search, Range, Select, SelectFilter, Filter } from "../../../models/filter.model";

@Component({
    selector: 'app-filter-list',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
    @Input()
    public filterGroup: FilterGroup;
    @Output()
    public filterEvent: EventEmitter<FilterGroup> = new EventEmitter();;

    public constructor(private _ElementRef: ElementRef) { }

    public ngOnInit(): void {
    }

    private filterList(): void {
        this.getSearchFilters();
        this.getRangeFilters();
        this.getCheckboxFilters();
        this.getRadioFilters();
        this.filterEvent.next(this.filterGroup);
    }

    private getSearchFilters(): void {
        let searchInputs: Array<HTMLInputElement> =
            this._ElementRef.nativeElement.querySelectorAll('paper-card.search-card paper-input');
        searchInputs.forEach((element: HTMLInputElement) => {
            this.filterGroup.search.filters.forEach((filter: Search) => {
                if (element.dataset.searchKey === filter.key) {
                    filter.value = element.value;
                }
            });
        });
    }

    private getRangeFilters(): void {
        let rangeInputs: Array<HTMLInputElement> =
            this._ElementRef.nativeElement.querySelectorAll('paper-card.range-card paper-input');
        rangeInputs.forEach((element: HTMLInputElement) => {
            this.filterGroup.range.filters.forEach((filter: Range) => {
                if (element.dataset.rangeKeyMin === filter.key) {
                    filter.min = parseInt(element.value);
                }
                if (element.dataset.rangeKeyMax === filter.key) {
                    filter.max = parseInt(element.value);
                }
            });
        });
    }

    private getCheckboxFilters(): void {
        let checkboxFilters: Array<HTMLInputElement> =
            this._ElementRef.nativeElement.querySelectorAll('paper-card.checkbox-card');
        this.getSelectFilters(checkboxFilters);
    }

    private getRadioFilters(): void {
        let radioFilters: Array<HTMLInputElement> =
            this._ElementRef.nativeElement.querySelectorAll('paper-card.radio-card');
        this.getSelectFilters(radioFilters);
    }

    private getSelectFilters(selectFilters: Array<HTMLInputElement>): void {
        selectFilters.forEach((filterCard: HTMLInputElement) => {
            let querySelector: string = filterCard.dataset.selectType === "checkbox" ? "paper-checkbox" : "paper-radio-button";
            let checkboxList: NodeListOf<Element> = filterCard.querySelectorAll(querySelector);
            [].forEach.call(checkboxList, (element: HTMLInputElement) => {
                let selectFilter: SelectFilter<Select> = this.filterGroup.select.find((filter: SelectFilter<Select>): boolean => {
                    return filter.title === filterCard.dataset.selectTitle;
                });
                selectFilter.filters.forEach((filter: Select) => {
                    if (element.dataset.selectKey === filter.key) {
                        filter.value = element.checked
                    }
                });
            });
        });
    }

    private getSelectedRadio(filters: Array<Select>): string {
        let selectedRadio: Select = filters.find((filter: Select): boolean => {
            return filter.value;
        });

        return selectedRadio ? selectedRadio.key : "";
    }

    private resetList(): void {
        FilterGroup.reset(this.filterGroup);
        this.filterEvent.next(null);
    }
}
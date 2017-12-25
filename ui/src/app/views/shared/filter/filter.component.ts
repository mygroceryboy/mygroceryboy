import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { FilterGroup, Search, Range, Select, SelectFilter } from "../../../models/filter.model";

@Component({
    selector: 'app-filter-list',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
    @Input()
    public filterJson: FilterGroup;
    @Output()
    public filterEvent: EventEmitter<FilterGroup> = new EventEmitter();;

    public constructor(private elementRef: ElementRef) { }

    public ngOnInit(): void {
    }

    private filterList(): void {
        this.getSearchFilters();
        this.getRangeFilters();
        this.getCheckboxFilters();
        this.getRadioFilters();
        this.filterEvent.next(this.filterJson);
    }

    private getSearchFilters(): void {
        let searchInputs: Array<HTMLInputElement> =
            this.elementRef.nativeElement.querySelectorAll('paper-card.search-card paper-input');
        searchInputs.forEach((element: HTMLInputElement) => {
            this.filterJson.search.filters.forEach((filter: Search) => {
                if (element.dataset.searchKey === filter.key) {
                    filter.value = element.value;
                }
            });
        });
    }

    private getRangeFilters(): void {
        let rangeInputs: Array<HTMLInputElement> =
            this.elementRef.nativeElement.querySelectorAll('paper-card.range-card paper-input');
        rangeInputs.forEach((element: HTMLInputElement) => {
            this.filterJson.range.filters.forEach((filter: Range) => {
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
            this.elementRef.nativeElement.querySelectorAll('paper-card.checkbox-card');
        this.getSelectFilters(checkboxFilters);
    }

    private getRadioFilters(): void {
        let radioFilters: Array<HTMLInputElement> =
            this.elementRef.nativeElement.querySelectorAll('paper-card.radio-card');
        this.getSelectFilters(radioFilters);
    }

    private getSelectFilters(selectFilters: Array<HTMLInputElement>): void {
        selectFilters.forEach((filterCard: HTMLInputElement) => {
            let querySelector: string = filterCard.dataset.selectType === "checkbox" ? "paper-checkbox" : "paper-radio-button";
            let checkboxList: NodeListOf<Element> = filterCard.querySelectorAll(querySelector);
            [].forEach.call(checkboxList, (element: HTMLInputElement) => {
                let selectFilter: SelectFilter<Select> = this.filterJson.select.find((filter: SelectFilter<Select>): boolean => {
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
        this.filterJson = JSON.parse(JSON.stringify(this.filterJson));
        this.filterEvent.next(this.filterJson);
    }
}
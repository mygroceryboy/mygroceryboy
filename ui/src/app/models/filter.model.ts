export type OrderType = "asc" | "desc";

export class Search {
    public key: string;
    public value: string;
}

export class Range {
    public key: string;
    public min: number;
    public max: number;
}

export class Select {
    public key: string;
    public value: boolean;
}

export class Filter<T> {
    public title: string;
    public filters: T[];
}

export class SelectFilter<T> extends Filter<T> {
    public type: string;
}

export class FilterGroup {

    public constructor() {
        this.page = 1;
        this.size = 20;
    }

    public page: number;
    public size: number;
    public orderType: OrderType;
    public orderBy: string;

    private _search: Filter<Search>;
    public get search(): Filter<Search> {
        return this._search;
    }

    private _range:  Filter<Range>;
    public get range():  Filter<Range> {
        return this._range;
    }

    private _select: Array<SelectFilter<Select>>;
    public get select(): Array<SelectFilter<Select>> {
        return this._select;
    }

    public static reset(filterGroup: FilterGroup): void {
        filterGroup.search.filters.forEach((filter: Search) => {
            filter.value = "";
        });
        filterGroup.range.filters.forEach((filter: Range) => {
            filter.min = null;
            filter.max = null;
        });
        filterGroup.select.forEach((selectFilter: SelectFilter<Select>) => {
            selectFilter.filters.forEach((filter: Select) => {
                filter.value = false;
            });
        });
    }
}
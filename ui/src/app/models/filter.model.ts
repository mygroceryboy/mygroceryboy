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

    public constructor(filter: any) {
        this._search = filter.search;
        this._range = filter.range;
        this._select = filter.select;
    }

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
}
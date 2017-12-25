export class Filter {

    public constructor() {}

    private _searchFilters: Map<string, string>
    public get searchFilters(): Map<string, string> {
        return this._searchFilters;
    }

    private _rangeFilters: Map<string, Array<number>>;
    public get rangeFilters(): Map<string, Array<number>> {
        return this._rangeFilters;
    }

    private _multiSelectFilters: Map<string, Array<string>>;
    public get multiSelectFilters(): Map<string, Array<string>> {
        return this._multiSelectFilters;
    }

    public updateSearchFilter(key: string, value: string = ""): void {
        if (!key) {
            return;
        }
        if (!this._searchFilters) {
            this._searchFilters = new Map<string, string>();
        }
        this.searchFilters.set(key, value);
    }

    public removeSearchFilter(key: string): void {
        if (!key) {
            return;
        }
        this._searchFilters.delete(key);
    }

    public updateRangeFilter(key: string, value: Array<number> = []): void {
        if (!key) {
            return;
        }
        if (!this._rangeFilters) {
            this._rangeFilters = new Map<string, Array<number>>();
        }
        this.rangeFilters.set(key, value || []);
    }

    public removeRangeFilter(key: string): void {
        if (!key) {
            return;
        }
        this._searchFilters.delete(key);
    }

    public updateMultiselectFilter(key: string, value: Array<string> = []): void {
        if (!key) {
            return;
        }
        if (!this._multiSelectFilters) {
            this._multiSelectFilters = new Map<string, Array<string>>();
        }
        this.multiSelectFilters.set(key, value || []);
    }

    public removeMultiselectFilter(key: string): void {
        if (!key) {
            return;
        }
        this._searchFilters.delete(key);
    }
}
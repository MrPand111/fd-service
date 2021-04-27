
import { ParamsType } from "./type";
const Store = {
    getStore<T>(key: string): T[] {
        try {
            const list = JSON.parse(window.localStorage.getItem(key) || '[]');
            const res = list.filter((li: ParamsType<T>) => (
                li.Expires ? (li.Expires > new Date().getTime()/1000) : true
            ));
            this.setStore(key, JSON.stringify(res));
            console.log('li', list, res);
            return res;
        } catch(err) {
            throw err;
        }
    },
    setStore(key: string, value: string) {
        console.log(value);
        try {
            window.localStorage.setItem(key, value);
            return true;
        } catch(err) {
            throw(err);
        }
    }
};

class LocalDBService<T> {
    private _table: string;
    private params: T | undefined;
    private _Expires: number | undefined;

    constructor(table: string) {
        this._table = table;
    }

    init() {
        this.params = undefined;
    }

    where(params: T) {
        this.params = params;
        return this;
    }

    last(e: number) {
        this._Expires = new Date().getTime()/1000 + e;
        return this;
    }

    getAll() {
        const list: T[] = Store.getStore(this._table);
        const res = list.filter((item: T) => {
            if(!this.params) return true;
            return Object
                .keys(this.params)
                .every((key: string) => (
                    this.params && (this.params as any)[key] === (item as any)[key]
                ));
        });
        this.init();
        return res;
    }

    set(value: T) {
        const list = Store.getStore(this._table);
        const val = {...value, Expires: this._Expires};
        let str = '';
        if(!list.length) str = JSON.stringify([val]);
        else {
            list.push(val);
            str = JSON.stringify(list);
        }
        console.log(str);
        Store.setStore(this._table, str);
        this.init();
        return true;
    }
}

class LocalDB {
    constructor() {}

    createEntity<T>(table: string) {
        return new LocalDBService<T>(table);
    }
}

export default LocalDB;
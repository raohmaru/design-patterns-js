export default class DataModel {
    constructor() {
        this._time = Date.now();
        this._observers = [];
    }

    get time() {
        return this._time;
    }

    set time(value) {
        this._time = value;
        this.notify();
    }

    subscribe(cb) {
        this._observers.push(cb);
    }

    notify() {
        for (let i = 0, len = this._observers.length; i < len; i++) {
            this._observers[i]();
        }
    }
}

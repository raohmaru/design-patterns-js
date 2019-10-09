export default class View2 {
    constructor(model) {
        this._model = model;
        this._model.subscribe(this.onDataChange.bind(this));
    }

    onDataChange() {
        const date = new Date(this._model.time);
        const arr = new Array(date.getSeconds()).fill('.');
        console.log(arr.join(''));
    }
}
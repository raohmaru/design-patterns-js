export default class View1 {
    constructor(model) {
        this._model = model;
        this._model.subscribe(this.onDataChange.bind(this));
    }

    onDataChange() {
        const date = new Date(this._model.time);
        console.log(date.toLocaleTimeString());
    }
}
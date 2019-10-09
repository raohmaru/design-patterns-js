export default class Controller {
    constructor(model) {
        this._model = model;
    }

    start() {
        setInterval(this.tick.bind(this), 1000);
    }

    tick() {
        this._model.time = Date.now();
    }
}
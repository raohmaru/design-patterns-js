// The constructor to decorate
class MacBook {
    constructor(price) {
        this._cost = price;
    }

    set baseCost(v) {
        this._cost = v;
    }

    cost() {
        return this._cost;
    }
}

// Decorator 1
function memory(macbook) {
    const _cost = macbook.cost;
    macbook.cost = function () {
        return _cost.apply(macbook) + 75;
    };
}

// Decorator 2
function engraving(macbook) {
    const _cost = macbook.cost;
    macbook.cost = function () {
        return _cost.apply(macbook) + 200;
    };
}

// Decorator 3
function insurance(macbook) {
    const _cost = macbook.cost;
    macbook.cost = function () {
        return _cost.apply(macbook) + 250;
    };
}

const mb = new MacBook(999);
console.log(`Base MacBook costs $${mb.cost()}`);

memory(mb);
engraving(mb);
insurance(mb);

console.log(`With extras: $${mb.cost()}`);

mb.baseCost = 1200;

console.log(`Price rise! Now it costs $${mb.cost()}`);
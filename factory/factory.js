class Elf {
    constructor({name}) {
        this.name = name;
    }
}

class Hobbit {
    constructor({name}) {
        this.name = name;
    }
}

const Factory = {
    create(type, options) {
        let Klass;
        if (type === 'elf') {
            Klass = Elf;
        } else if (type === 'hobbit') {
            Klass = Hobbit;
        }

        const obj = new Klass(options);
        obj.level = 1;
        obj.armor = 'none';
        return obj;
    }
}

const npc1 = Factory.create('elf', {name: 'Finrod'});
console.log(npc1);

const npc2 = Factory.create('hobbit', {name: 'Samwise'});
console.log(npc2);

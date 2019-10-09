// JavaScript classes are syntactical sugar over JavaScript's existing prototype-based inheritance.

class MyClass {
    constructor() {
        // Private prop (naming convention)
        this._privateProp = null;
    }

    /** @public */
    publicMethod() {
        console.log('I am a public method');
        console.log('privateProp:', this._privateProp);
    }

    get privateProp() {
        return this._privateProp;
    }

    set privateProp(value) {
        this._privateProp = value;
    }
}

class MyExtendedClass extends MyClass {
    constructor() {
        super();
    }
}

const myclass = new MyExtendedClass();
myclass.privateProp = 'Hello world';
myclass.publicMethod();
console.log(myclass._privateProp);  // It is not really private

let MyClass = (function () {
    let key = Symbol();  // Symbol used as property name. Represents a unique identifier.

    return class MyClass {
        // Proposal for private fields
        // #realPrivate;

        constructor() {
            // Private prop (naming convention)
            this[key] = null;
        }

        /** @public */
        publicMethod() {
            console.log('I am a public method');
            console.log('privateProp:', this[key]);
        }

        get privateProp() {
            return this[key];
        }

        set privateProp(value) {
            this[key] = value;
        }
    }
})();

const myclass = new MyClass();
myclass.privateProp = 'Hello world';
myclass.publicMethod();

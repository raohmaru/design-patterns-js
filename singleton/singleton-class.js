let Singleton = (function () {
    let instance;
    let preventCreation = Symbol();  // Symbol used as property name. Represents a unique identifier.

    const Singleton = class {
        constructor(caller) {
            if (caller !== preventCreation) {
                throw new Error("This is a singleton class, please use getInstance() method.");
            }

            console.log('New instance of Singleton class');
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

    Singleton.getInstance = () => {
        if (!instance) {
            instance = new Singleton(preventCreation);
        }
        return instance;
    }

    return Singleton;
})();

try {
    let myclass = new Singleton();  // Exception
} catch(err) {
    console.log('[Error]', err.message);
}
myclass = Singleton.getInstance();
myclass = Singleton.getInstance();
myclass.privateProp = 'Hello world';
myclass.publicMethod();

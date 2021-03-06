// IIFE to allow for private scopes.
const Module = (() => {
    // Private var
    const privateVar = 'This a private property';

    // Export public methods
    return {
        /**
         * @public
         */
        publicMethod() {
            console.log('Called publicMethod');
            console.log(privateVar);
        }
    };
})();

Module.publicMethod();
console.log(Module.privateVar);  // undefined

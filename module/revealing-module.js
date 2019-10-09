// IIFE to allow for private scopes.
const Module = (() => {
    // Private var
    const privateVar = 'This a private property';

    /**
     * @public
     */
    const publicMethod = () => {
        console.log('Called publicMethod');
        console.log(privateVar);
    }

    // Export public methods
    return {
        publicMethod
    };
})();

Module.publicMethod();
console.log(Module.privateVar);  // undefined

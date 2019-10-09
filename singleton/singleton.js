const Singleton = (() => {
    let instance;

    function create() {
        console.log('Creating new instance');

        function someMethod() {
            console.log('Invoked someMethod()');
        }

        function otherMethod() {
            console.log('Invoked otherMethod()');
        }

        // Export public methods
        return {
            someMethod,
            otherMethod
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = create();
            }
            return instance;
        }
    };
})();

Singleton.getInstance().someMethod();
Singleton.getInstance().otherMethod();
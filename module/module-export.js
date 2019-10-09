/** @private */
const privateMethod = ()  => {
    console.log('This is a private method');
};

/** @public */
const publicMethod = ()  => {
    console.log('Called a public method');
    console.log('Now I\'m gonna call a private method from here');
    privateMethod();
};

// Export public methods
export default {
    publicMethod
}

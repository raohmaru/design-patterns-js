/** @private */
const privateMethod = ()  => {
    console.log('This is a private method');
};

/** @public */
const publicMethod = ()  => {
    console.log('Called publicMethod');
    privateMethod();
};

// Export public methods
export default {
    publicMethod
}
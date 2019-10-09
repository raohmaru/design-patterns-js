// Classic prototype-based inheritance.

function MyClass() {
    // Private prop (naming convention)
    this._privateProp = null;
}

/** @public */
MyClass.prototype.publicMethod = function() {
    console.log('I am a public method');
    console.log('privateProp:', this._privateProp);
}

/** @public */
MyClass.prototype.setPrivateProp = function(value) {
    this._privateProp = value;
}

const myclass = new MyClass();
myclass.setPrivateProp('Hello world');
myclass.publicMethod();
console.log(myclass._privateProp);  // It is not really private

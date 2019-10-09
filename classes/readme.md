# Understanding Classes in JavaScript
JavaScript is a prototype-based language, and every object in JavaScript has a hidden internal property called [[Prototype]] that can be used to extend object properties and methods.

## Classes in ECMAScript 5
In ECMAScript 5, we use **constructor functions** to mimic an object-oriented design pattern in JavaScript,
Constructor functions are functions that are used to construct new objects. The `new` operator is used to create new instances based off a constructor function.

```
// Initialize constructor functions
function Human(name, level) {
  this.name = name;
  this.level = level;
}

Human.prototype.greet = function () {
  return `${this.name} says hello.`;
}

function Developer(name, level, tool) {
  Human.call(this, name, level);
  this.tool = tool;
}

// Link prototypes and add prototype methods
Developer.prototype = Object.create(Human.prototype);

// Extend prototype with a new methods
Developer.prototype.debug = function () {
  return `${this.name} debugs with the ${this.tool}.`;
}

// Initialize individual instances
const dev = new Developer('Axel', 1, 'Firefox');
console.log( Object.getPrototypeOf(dev) );  // Human {...}
console.log( dev.greet() );
console.log( dev.debug() );
```

## Classes in ECMAScript 2015
ECMAScript 2015 introduced classes. Classes in JavaScript do not actually offer additional functionality, and are often described as providing “syntactical sugar” over prototypes and inheritance in that they offer a cleaner and more elegant syntax. Because other programming languages use classes, the class syntax in JavaScript makes it more straightforward for developers to move between languages.

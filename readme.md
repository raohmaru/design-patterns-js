# Design Patterns
A collection of design patterns applied to Frontend and implemented in JavaScript.

_"Reasoning about the Data Flows within different components of a software system is the central idea of software architecture."_

## Abstract
Design patterns are recurring solutions that solve Web development design problems and provide a common language for
web developers who create user interfaces. In general, patterns do not specify requirements, but rather, present
recommended solutions to design problems. They give generalized solutions in the form of templates that may be applied
to real-world problems.

## License
[Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/legalcode)


## Introduction
In classical object-oriented programming languages, a constructor is a special method used to initialize a newly
created object once memory has been allocated for it.
In JavaScript, as almost everything is an object, we’re most often interested in object constructors.

Object constructors are used to create specific types of objects — both preparing the object for use and accepting
arguments which a constructor can use to set the values of member properties and methods when the object is first created.

## Object Oriented Programming
Object Oriented Programming (OOP) refers to using self-contained pieces of code to develop applications. We call these
self-contained pieces of code objects, better known as Classes in most OOP programming languages and Functions in
JavaScript. We use objects as building blocks for our applications. Building applications with objects allows us to
adopt some valuable techniques, namely, Inheritance (objects can inherit features from other objects), Polymorphism
(objects can share the same interface —how they are accessed and used— while their underlying implementation of the
interface may differ), and Encapsulation (each object is responsible for specific tasks).

### Polymorphism
The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action in
different forms.
It provides an ability to call the another method (of the same or different name) on different JavaScript objects or 
at a higher level of the inheritance hierarchy.

## Object Creation
Examples of object creation.

```
var newObject = {};

var newObject = Object.create( Object.prototype );

var newObject = new Object();

```
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

### Cost
Object are created using the constructor function. A primitive type object is created using just the type function.
```
var num = 2; // Primitive

var num = Number(2); // Primitive

var num = new Number(2); // Number object
```

Quirk zone
```
new Number('2') === 2;
Number('2') === 2;
```

### Bonus
Creates an empty object without prototype, cheap and fast. `Object.prototype.hasOwnProperty()` is not needed to iterate
over its properties in a for loop.

```
var newObject = Object.create( null );
```

## Basic Constructors
```
function person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  
  this.fullName = function(){
    return this.firstName + " " + this.lastName;
  }
}

var person1 = new person('Akash', 'Pal');
var person2 = new person('Black', 'Panther');
console.log( person1.fullName() ); // "Akash Pal"
console.log( person2.fullName() ); // "Black Panther"
```
Check `person1` prototype.

## Constructor With Prototypes
When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds
a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an
object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this
prototype chain.

```
function Person(name) {
  this.name = name;
};

Person.prototype.greeting = function() {
  console.log('Hi! I\'m ' + this.name + '.');
};

var person1 = new Person('Darth Vader');
person1.greeting();

```

## Classes
The class keyword introduced in ES2015 is syntactical sugar; JavaScript remains prototype-based.
https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20%26%20beyond/ch3.md#classes

@class definition
@class transpilled to ES5

## Module Pattern

## Singleton Pattern

## Observer Pattern

## Publish/Subscribe Pattern

## Mediator Pattern

## Prototype Pattern
We create objects which act as prototypes for other objects. The prototype object itself is used as a blueprint for
each object the constructor creates. If the prototype of the constructor function used contains a property called "name",
then each object created by that same constructor will also have this same property.

## Command Pattern

## Façade Pattern

## Factory Pattern

## Mixin Pattern

## Decorator Pattern

## Model View ViewModel Pattern

## More About front-end patterns
https://blog.webf.zone/contemporary-front-end-architectures-fb5b500b0231

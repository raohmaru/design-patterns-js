function Person(name) {
  this.name = name;
};

Person.prototype.greeting = function() {
  console.log('Hi! I\'m ' + this.name + '.');
};

Person.prototype.farewell = function() {
    console.log(this.name + ' has left the building. Bye for now!');
}

var person1 = new Person('Tammi Smith');
person1.greeting();

// Teacher class
function Teacher(name, subject) {
  Person.call(this, name);
  this.subject = subject;
}
// We create a new object and make it the value of Teacher.prototype. The new object has Person.prototype as its prototype
// and will therefore inherit, if and when needed, all the methods available on Person.prototype.
Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype's constructor property is now equal to Person(), because we just set Teacher.prototype to reference an
// object that inherits its properties from Person.prototype. We restore the constructor then.
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function() {
    console.log('Hello. My name is ' + this.name + ', and I teach ' + this.subject + '.');
};

var teacher1 = new Teacher('Rawl', 'design patterns');
teacher1.greeting();

// Student class
function Student(name, age) {
  Person.call(this, name, age);
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.greeting = function() {
  console.log('Yo! I\'m ' + this.name + '.');
};

var student1 = new Student('Bart Simpson');
student1.greeting();
/** http://www.datchley.name/understanding-prototypes-delegation-composition/ **************/
var Animal = {
    who: function() { return this.name; },
    speak: function(s) { console.log(this.who() + ": " + s); }
}

var Dog = Object.create(Animal, {
    bark: {
        value: function() { this.speak("woof!"); }
    }
});

console.log('\n-- Object.create + Object.assign');
var fluffy = Object.assign(Object.create(Dog), { name: "Fluffy" });
fluffy.who();
fluffy.bark();



/** Composing Behavior through Mixins **/
// A base object so we can create people
var Person = {
    who: function(){ return this.name; },
    init: function(name) {
        this.name = name;
    }
};

// Factor out common functionality into their own objects
var canSpeak = {
    speak: function(s) { console.log(this.who() + ": " + s); }
};
var canWalk = {
    walk: function() { console.log(this.who() + " is walking..."); }
};
var canBuild = {
    tools: ['hammer', 'pliers'],
    use: function(tool) { this.tools.push(tool); },
    build: function(thing) {
        var withTool = parseInt(Math.floor(Math.random() * this.tools.length));
        console.log(this.who() + " is building a " + thing + " using " + this.tools[withTool]);
    }
};

// Can we build it?...
console.log('\n-- Composing Behavior through Mixins');
var bob = Object.assign(Object.create(Person), canSpeak, canWalk, canBuild);
bob.init("Bob the Builder");
bob.speak("Hi there!");
bob.walk();
bob.use("stapler");
bob.build("web site");

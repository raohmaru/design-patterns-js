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

var fluffy = Object.assign(Object.create(Dog), { name: "Fluffy" });
fluffy.who();
fluffy.bark();

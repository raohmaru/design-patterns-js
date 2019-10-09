# Singleton Pattern
A Singleton only allows for a single instantiation, but many instances of the same object.
The Singleton restricts clients from creating multiple objects, after the first object created,
it will return instances of itself.

Classically, the Singleton pattern can be implemented by creating a class with a method that
creates a new instance of the class if one doesn’t exist. In the event of an instance already
existing, it simply returns a reference to that object.

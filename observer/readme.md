# Observer Pattern
The Observer is a design pattern where an object (known as a subject) maintains a list of objects depending on it (observers),
automatically notifying them of any changes to state.

+ Subject: maintains a list of observers, facilitates adding or removing observers
+ Observer: provides an update interface for objects that need to be notified of a Subject’s changes of state
+ ConcreteSubject: broadcasts notifications to observers on changes of state, stores the state of ConcreteObservers
+ ConcreteObserver: stores a reference to the ConcreteSubject, implements an update interface for the Observer to ensure state is consistent with the Subject’s

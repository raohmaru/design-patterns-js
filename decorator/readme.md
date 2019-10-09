# Decorator Design Pattern
Decorators offer the ability to add behaviour to existing classes in a system dynamically. The idea is that the decoration itself isn't essential to the base functionality of the class, otherwise it could be baked into the superclass itself.

Decorators can be used to modify existing systems where we wish to add additional features to objects without the need to heavily modify the underlying code using them.

Promote code re-use.

## Advantages
Objects can be wrapped or "decorated" with new behavior and then continue to be used without needing to worry about the base object being modified.
In a broader context, this pattern also avoids us needing to rely on large numbers of subclasses to get the same benefits.

## Disadvantages
If poorly managed, it can significantly complicate our application architecture as it introduces many small, but similar objects into our namespace. The concern here is that in addition to becoming hard to manage, other developers unfamiliar with the pattern may have a hard time grasping why it's being used.
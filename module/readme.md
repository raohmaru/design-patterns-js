# Module Pattern
The Module pattern was originally defined as a way to provide both private and public encapsulation for classes in
conventional software engineering.

In JavaScript, the Module pattern is used to further emulate the concept of classes in such a way that we’re able to
include both public/private methods and variables inside a single object, thus shielding particular parts from the
global scope.
What this results in is a reduction in the likelihood of our function names conflicting with other functions defined
in additional scripts on the page.

## Revealing Module Pattern
An updated pattern where we would simply define all of our functions and variables in the private scope and return an
anonymous object with pointers to the private functionality we wished to reveal as public.

# Model View Controller Design Pattern
MVC is an architectural design pattern that encourages improved application organization through a separation of concerns. It enforces the isolation of business data (Models) from user interfaces (Views), with a third component (Controllers) traditionally managing logic and user-input.

1. View and Controller contains a direct reference to Model but not vice versa. It means Model is not dependent on UI and can change without worrying about UI concerns.
2. Model implements Observer pattern and one or more View objects subscribe to it. When Model changes, it raises the event and View finally updates after reacting to the event.
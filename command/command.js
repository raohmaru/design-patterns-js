// Invoker
class Switch {
    constructor() {
        this._commands = [];
    }

    storeAndExecute(command) {
        this._commands.push(command);
        command.execute();
    }
}

// Receiver
class Light {
    turnOn() { console.log('turn on') }
    turnOff() { console.log('turn off') }
}

// Commands
class Command {
    constructor(receiver) {
        this._receiver = receiver;
    }

    execute() {}
}

class FlipDownCommand extends Command {
    constructor(receiver) {
        super(receiver);
    }

    execute() {
        this._receiver.turnOff();
    }
}

class FlipUpCommand extends Command {
    constructor(receiver) {
        super(receiver);
    }

    execute() {
        this._receiver.turnOn();
    }
}

// Client
var light = new Light();
var switchUp = new FlipUpCommand(light);
var switchDown = new FlipDownCommand(light);
var s = new Switch();

s.storeAndExecute(switchUp);
s.storeAndExecute(switchDown);
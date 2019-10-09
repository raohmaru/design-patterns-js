// Signals are inspired in C#'s Signals. Each signal is an object that dispatches a single topic.
// No need for event names.

class Signal {
	constructor() {
		this._listeners = [];
	}

	then(callback) {
		this._listeners.push(callback);
	}

	emit(...args) {
		let i = this._listeners.length;
		while (i-- > 0) {
			this._listeners[i](...args);
		}
	}

	remove(callback) {
		this._listeners = this._listeners.filter((func) => func !== callback);
	}
};

const eventEmitter = {
    onUpdate: new Signal(),  // Creates a new signal for the topic "update"
    dispatch: function (data) {
        this.onUpdate.emit(data);
    }
};

// Subscribe to the signal
eventEmitter.onUpdate.then((data) => {
    console.log('Event dispatched with data: ', data);
});

eventEmitter.dispatch({code: 0, message: 'Transfer ok'});
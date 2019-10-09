const pubsub = (myObject) => {
    // Storage for topics that can be broadcast or listened to
    const topics = {};
    // A topic identifier
    let subUid = -1;

    // Publish events with a specific topic name and arguments
    myObject.publish = function( topic, args ) {
        const subscribers = topics[topic];
        let len = subscribers.length;
        while (len--) {
            subscribers[len].func( topic, args );
        }
    };

    // Subscribe to events with a specific topic name and a callback function
    myObject.subscribe = function( topic, func ) {
        if (!topics[topic]) {
            topics[topic] = [];
        }
        const token = ( ++subUid ).toString();
        topics[topic].push({
            token: token,
            func: func
        });
        return token;
    };

    // Unsubscribe from a specific topic, based on a tokenized reference
    myObject.unsubscribe = function( token ) {
        for ( let m in topics ) {
            for ( let i = 0, j = topics[m].length; i < j; i++ ) {
                if ( topics[m][i].token === token ) {
                    topics[m].splice( i, 1 );
                    return;
                }
            }
        }
    };
};

const emitter = {};
pubsub(emitter);  // Decorator pattern

const subscription = emitter.subscribe('event', (topic, msg) => {
    console.log(msg);
});

emitter.publish('event', 'message ongoing');
emitter.unsubscribe(subscription);
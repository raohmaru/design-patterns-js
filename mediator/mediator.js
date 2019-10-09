/**
 * Based on Netcentric Component Loader messaging system.
 * @see https://projects.netcentric.biz/wiki/display/FRONTEND/Implementing+a+Javascript+Component+Loader
 * @see https://github.com/14islands/component-loader-js
 */
class Mediator {
    constructor() {
        this.topics = {};
    }

    /**
     * Subscribes to a topic. The given callback will be triggered.
     * @param  {String} topic      Topic string
     * @param  {Function} callback Callback function that would be triggered.
     */
    subscribe(topic, callback) {
        // Is this a new topic?
        if (!Object.prototype.hasOwnProperty.call(this.topics, topic)) {
            this.topics[topic] = [];
        }
        // Store the subscriber callback
        this.topics[topic].push(callback);
    }

    /**
     * Removes the stored topic and callback.
     * @param  {String}   topic    Topic string
     * @param  {Function} callback Callback function that would be triggered.
     * @return {Boolean}           True on success, False otherwise.
     */
    unsubscribe(topic, callback) {
        // Do we have this topic?
        if (!Object.prototype.hasOwnProperty.call(this.topics, topic)) {
            return false;
        }

        const subscribers = this.topics[topic];

        // Find out where this is and remove it
        for (let i = 0, len = subscribers.length; i < len; i++) {
            if (subscribers[i] === callback) {
                subscribers.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    /**
     * Calls the callback function of all the subscriptors to the given topic.
     * @param  {String} topic  Topic string
     * @param  {Array} data   Additional data send to the callback function
     * @return {Boolean} Return true if it has subscriptors, otherwise return false
     */
    publish(topic, ...data) {
        // Check if we have subscribers to this topic
        if (!Object.prototype.hasOwnProperty.call(this.topics, topic)) {
            return false;
        }
        const topics = this.topics[topic];
        // Loop through them and fire the callbacks
        for (let j = 0, len = topics.length; j < len; j++) {
            const cb = topics[j];
            // Call it's callback
            if (cb) {
                cb(...data);
            }
        }
        return true;
    }
}

const mediator = new Mediator();
mediator.subscribe('attack', () => {
    console.log('"attack" event dispatched');
});

// Create a new object that will subscribe to the "attack" events
function Defender() {
    const onAttack = (damage, weapon) => {
        console.log(`Attacked with ${weapon}. Damage: ${damage}`);
    };
    mediator.subscribe('attack', onAttack);
};
new Defender();

// Object that will dispatch "attack" events
function Attacker() {
    const attack = () => {
        mediator.publish('attack', 100, 'spear');
    };
    return {
        attack
    };
};
const atk = new Attacker();
atk.attack();
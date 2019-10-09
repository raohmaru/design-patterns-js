function ObserverList() {
    this.list = [];
}

ObserverList.prototype = {
    add(obj) {
        this.list.push(obj);
    },
    remove(obj) {
        var index = this.list.indexOf(obj);
        if (index > -1) {
            this.list.splice(index, 1);
        }
    },
    indexOf(obj) {
        return this.list.indexOf(obj);
    },
    get(idx) {
        return this.list[idx];
    },
    count() {
        return this.list.length;
    }
};

function Subject() {
    const observers = new ObserverList();

    return {
        subscribeObserver: (observer) => {
            observers.add(observer);
        },
        unsubscribeObserver: function (observer) {
            observers.remove(observer);
        },
        notifyObserver: function (observer, data) {
            const index = observers.indexOf(observer);
            if (index > -1) {
                observers.get(index).notify(data);
            }
        },
        notifyAllObservers: function (data) {
            for (let i = 0; i < observers.count(); i++) {
                observers.get(i).notify(data);
            };
        }
    };
};

class Observer {
    notify(data) {
        console.log(`Observer ${this} is notified with data`, data);
    }
}

const subject = new Subject();

const observer1 = new Observer();
const observer2 = new Observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);

subject.notifyObserver(observer2); // Observer 2 is notified!
subject.notifyAllObservers({watchmen:true});
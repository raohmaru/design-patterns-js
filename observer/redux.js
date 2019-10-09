import { createStore, combineReducers } from './slim-redux.js';

// Actions
const addTodo = text => ({
    type: 'ADD_TODO',
    text
});

const addReminder = date => ({
    type: 'ADD_REMINDER',
    date
});

// Reducers
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        default:
            return state
    }
};

const reminders = (state = [], action) => {
    switch (action.type) {
        case 'ADD_REMINDER':
            return [
                ...state,
                {
                    date: action.date
                }
            ]
        default:
            return state
    }
};

const reducers = combineReducers({
    todos,
    reminders
});

const store = createStore(reducers, {todos:[], reminders:[]});

// Observable
function observe(store, select, onChange) {
    let currentState;

    function handleChange() {
        let nextState = select(store.getState());
        if (nextState !== currentState) {
            currentState = nextState;
            onChange(currentState);
        }
    }

    let unsubscribe = store.subscribe(handleChange);
    handleChange();
    return unsubscribe;
}

// Subscribe to a change in the store using the observer pattern
observe(store, state => state.todos, (todos) => {
    console.log('todos:', JSON.stringify(todos));
});

observe(store, state => state.reminders, (reminders) => {
    console.log('reminders:', JSON.stringify(reminders));
});

store.dispatch(addTodo('todo 1'));
store.dispatch(addReminder(new Date()));
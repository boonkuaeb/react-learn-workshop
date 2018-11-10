import {combineReducers} from 'redux';


function countAge(state = 0, action) {
    switch (action.type) {
        case 'UP_AGE':
            return state + 1;
        case 'DOWN_AGE':
            return state - 1;
        default:
            return state;
    }
}

function ABC(state = 0, action) {
    switch (action.type) {
        case 'UP_AGE':
            return state + 1;
        case 'DOWN_AGE':
            return state - 1;
        default:
            return state;
    }
}

const reducers = combineReducers({
    counter: countAge,
    abc:ABC
});

export default reducers;
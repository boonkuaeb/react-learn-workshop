import {combineReducers} from 'redux';


const initialTodosState = {isFailed: false, data: null, isLoading: false};

function todos(state = initialTodosState, action) {
    switch (action.type) {
        case 'LOAD_TODOS_PENDING':
            return {...state, isFailed: false, data: null, isLoading: true};
        case 'LOAD_TODOS':
            return {...state, isFailed: false, data: action.payload};
        case 'LOAD_TODOS_FAIL':
            return {...state, isFailed: true, data: action.payload};
        default:
            return state;
    }
}

const initialUpdateTodosState = {isFailed: false, data: null, isLoading: false};

function updateTodos(state = initialUpdateTodosState, action) {
    switch (action.type) {
        case 'TODO_UPDATED_PENDING':
            return {...state, isFailed: false, data: null, isLoading: true};
        case 'TODO_UPDATED':
            // console.log('stats',state);
            // console.log( 'data',action.payload);
            return {...state, isFailed: false, data: action.payload};
        case 'TODO_UPDATED_FAIL':
            return {...state, isFailed: true, data: action.payload};
        default:
            return state;
    }
}


const reducers = combineReducers({
    todos,
    updateTodos
});

export default reducers;
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

const initialUsersState = {isFailed: false, data: null, isLoading: false};

function users(state = initialUsersState, action) {
    switch (action.type) {
        case 'LOAD_USERS_PENDING':
            return {...state, isFailed: false, data: null, isLoading: true};
        case 'LOAD_USERS':
            return {...state, isFailed: false, data: action.payload};
        case 'LOAD_USERS_FAIL':
            return {...state, isFailed: true, data: action.payload};
        default:
            return state;
    }
}


const initialAlbumsState = {isFailed: false, data: null, isLoading: false};

function albums(state = initialAlbumsState, action) {
    switch (action.type) {
        case 'LOAD_ALBUMS_PENDING':
            return {...state, isFailed: false, data: null, isLoading: true};
        case 'LOAD_ALBUMS':
            return {...state, isFailed: false, data: action.payload, isLoading: false};
        case 'LOAD_ALBUMS_FAIL':
            return {...state, isFailed: true, data: action.payload, isLoading: false};
        default:
            return state;
    }
}

const initialPhotosState = {isFailed: false, data: null, isLoading: false};

function photos(state = initialPhotosState, action) {
    switch (action.type) {
        case 'LOAD_PHOTOS_PENDING':
            return {...state, isFailed: false, data: null, isLoading: true};
        case 'LOAD_PHOTOS':
            return {...state, isFailed: false, data: action.payload, isLoading: false};
        case 'LOAD_PHOTOS_FAIL':
            return {...state, isFailed: true, data: action.payload, isLoading: false};
        default:
            return state;
    }
}



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



const reducers = combineReducers({
    counter: countAge,
    users,
    albums,
    photos,
    todos
});

export default reducers;
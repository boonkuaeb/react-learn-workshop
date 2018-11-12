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

const initailUsersState = { isFailed : false, data:null };
function users(state = initailUsersState, action) {
    switch (action.type) {
        case 'LOAD_USERS':
            return {...state, isFailed: false, data: action.payload};
        case 'LOAD_USERS_FAIL':
            return {...state, isFailed: true, data: action.payload};
        default:
            return state;
    }
}



const initailAblumState = { isFailed : false, data:null };
function albums(state = initailAblumState, action) {
    switch (action.type) {
        case 'LOAD_ALBUMS':
            return {...state, isFailed: false, data: action.payload};
        case 'LOAD_ALBUMS_FAIL':
            return {...state, isFailed: true, data: action.payload};
        default:
            return state;
    }
}


const reducers = combineReducers({
    counter: countAge,
    users,
    albums
});

export default reducers;
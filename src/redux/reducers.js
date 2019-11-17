import { combineReducers } from 'redux';

const heightReducer = (state, action) => {
    // initial state
    if (typeof state === 'undefined') {
        return {
            feet: '',
            inches: ''
        };
    }

    switch(action.type){
        case 'SET_HEIGHT_FEET':
            return {
                ...state,
                feet: action.payload
            };
        case 'SET_HEIGHT_INCHES':
            return {
                ...state,
                inches: action.payload
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({height: heightReducer});

export default rootReducer;
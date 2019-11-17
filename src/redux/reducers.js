import { combineReducers } from 'redux';

const counterReducer = (state, action) => {
    // initial state
    if (typeof state === 'undefined') {
        return 0;
    }

    switch(action.type){
        case 'INCREMENT':
            return { count: state.count + action.payload };
        case 'decrease_count':
            return { count: state.count - action.payload };
        default:
            return state;
    }
};

const rootReducer = combineReducers({count: counterReducer});

export default rootReducer;
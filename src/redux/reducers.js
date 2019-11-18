import { combineReducers } from 'redux';

const heightReducer = (state, action) => {
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
        case 'CLEAR_ALL_VALUES':
            return {
                feet: '',
                inches: ''
            };
        default:
            return state;
    }
};

const weightReducer = (state, action) => {
    if (typeof state === 'undefined') {
        return '';
    }

    switch(action.type){
        case 'SET_WEIGHT':
            return action.payload;
        case 'CLEAR_ALL_VALUES':
            return '';
        default:
            return state;
    }
};

const ageReducer = (state, action) => {
    if (typeof state === 'undefined') {
        return '';
    }

    switch(action.type){
        case 'SET_AGE':
            return action.payload;
        case 'CLEAR_ALL_VALUES':
            return '';
        default:
            return state;
    }
};

const soleLengthReducer = (state, action) => {
    if (typeof state === 'undefined') {
        return '';
    }

    switch(action.type){
        case 'SET_SOLE_LENGTH':
            return action.payload;
        case 'CLEAR_ALL_VALUES':
            return '';
        default:
            return state;
    }
};

const skierTypeReducer = (state, action) => {
    if (typeof state === 'undefined') {
        return {
            index: -1,
            skierType: ''
        };
    }

    switch(action.type){
        case 'SET_SKIER_TYPE':
            return action.payload;
        case 'CLEAR_ALL_VALUES':
            return {
                index: -1,
                skierType: ''
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    height: heightReducer,
    weight: weightReducer,
    age: ageReducer,
    soleLength: soleLengthReducer,
    skierType: skierTypeReducer
});

export default rootReducer;
export const setHeightFeet = (heightFeet) => {
    return {
        type: 'SET_HEIGHT_FEET',
        payload: heightFeet
    }
};

export const setHeightInches = (heightInches) => {
    return {
        type: 'SET_HEIGHT_INCHES',
        payload: heightInches
    }
};
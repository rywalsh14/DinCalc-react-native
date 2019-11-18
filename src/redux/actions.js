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

export const setWeight = (weight) => {
    return {
        type: 'SET_WEIGHT',
        payload: weight
    }
};

export const setAge = (age) => {
    return {
        type: 'SET_AGE',
        payload: age
    }
};

export const setSoleLength = (soleLength) => {
    return {
        type: 'SET_SOLE_LENGTH',
        payload: soleLength
    }
};

export const setSkierType = (segmentIndex, skierType) => {
    return {
        type: 'SET_SKIER_TYPE',
        payload: {
            index: segmentIndex,
            value: skierType
        }
    }
};
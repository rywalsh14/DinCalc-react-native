import React from 'react';
import WeightDetails from '../components/details/WeightDetails';
import ScreenContainer from '../components/utils/ScreenContainer';
import ContentContainer from '../components/utils/ContentContainer';
import { setWeight } from '../redux/actions';
import validate from 'validate.js';
import { weightConstraints } from '../non_react_js/validation';

const WeightScreen = ({ navigation, weight, dispatch }) => {
    const nextScreen = 'Age';
    const prevScreen = 'Height';

    return (
        <ScreenContainer>
            <ContentContainer
                prevScreen={prevScreen}
                nextScreen={nextScreen}
                navigation={navigation}
                validator={() => validate({weight: weight}, weightConstraints, {fullMessages: false})}
            >
                <WeightDetails
                    weight={weight}
                    onChangeWeight={(newValue) => dispatch(setWeight(newValue))}
                />
            </ContentContainer>
        </ScreenContainer>
    );
};

export default WeightScreen;
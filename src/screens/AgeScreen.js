import React from 'react';
import AgeDetails from '../components/details/AgeDetails';
import ScreenContainer from '../components/utils/ScreenContainer';
import ContentContainer from '../components/utils/ContentContainer';
import { setAge } from '../redux/actions';
import validate from 'validate.js';
import { ageConstraints } from '../non_react_js/validation';

const AgeScreen = ({ navigation, age, dispatch }) => {
    const nextScreen = 'SoleLength';
    const prevScreen = 'Weight';

    return (
        <ScreenContainer>
            <ContentContainer
                prevScreen={prevScreen}
                nextScreen={nextScreen}
                navigation={navigation}
                validator={() => validate({age: age}, ageConstraints, {fullMessages: false})}
            >
                <AgeDetails
                    age={age}
                    onChangeAge={(newValue) => dispatch(setAge(newValue))}
                />
            </ContentContainer>
        </ScreenContainer>
    );
};

export default AgeScreen;
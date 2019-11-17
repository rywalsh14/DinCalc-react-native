import React from 'react';
import AgeDetails from '../components/details/AgeDetails';
import ScreenContainer from '../components/utils/ScreenContainer';
import ContentContainer from '../components/utils/ContentContainer';
import { setAge } from '../redux/actions';

const AgeScreen = ({ navigation, age, dispatch }) => {
    const nextScreen = 'SoleLength';
    const prevScreen = 'Weight';

    return (
        <ScreenContainer>
            <ContentContainer
                prevScreen={prevScreen}
                nextScreen={nextScreen}
                navigation={navigation}
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
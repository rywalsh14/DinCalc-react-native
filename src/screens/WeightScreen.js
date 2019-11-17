import React from 'react';
import WeightDetails from '../components/details/WeightDetails';
import ScreenContainer from '../components/utils/ScreenContainer';
import ContentContainer from '../components/utils/ContentContainer';

const WeightScreen = ({ navigation }) => {
    const nextScreen = 'Age';
    const prevScreen = 'Height';

    return (
        <ScreenContainer>
            <ContentContainer
                prevScreen={prevScreen}
                nextScreen={nextScreen}
                navigation={navigation}
            >
                <WeightDetails />
            </ContentContainer>
        </ScreenContainer>
    );
};

export default WeightScreen;
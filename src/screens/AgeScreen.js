import React from 'react';
import AgeDetails from '../components/details/AgeDetails';
import ScreenContainer from '../components/utils/ScreenContainer';
import ContentContainer from '../components/utils/ContentContainer';

const AgeScreen = ({ navigation }) => {
    const nextScreen = 'SoleLength';
    const prevScreen = 'Weight';

    return (
        <ScreenContainer>
            <ContentContainer
                prevScreen={prevScreen}
                nextScreen={nextScreen}
                navigation={navigation}
            >
                <AgeDetails />
            </ContentContainer>
        </ScreenContainer>
    );
};

export default AgeScreen;
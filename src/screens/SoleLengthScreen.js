import React from 'react';
import SoleLengthDetails from '../components/details/SoleLengthDetails';
import ScreenContainer from '../components/utils/ScreenContainer';
import ContentContainer from '../components/utils/ContentContainer';

const SoleLengthScreen = ({ navigation }) => {
    const nextScreen = 'SkierType';
    const prevScreen = 'Age';

    return (
        <ScreenContainer>
            <ContentContainer
                prevScreen={prevScreen}
                nextScreen={nextScreen}
                navigation={navigation}
            >
                <SoleLengthDetails />
            </ContentContainer>
        </ScreenContainer>
    );
};

export default SoleLengthScreen;
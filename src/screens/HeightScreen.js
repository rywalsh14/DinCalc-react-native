import React from 'react';
import HeightDetails from '../components/details/HeightDetails';
import ScreenContainer from '../components/utils/ScreenContainer';
import ContentContainer from '../components/utils/ContentContainer';

const HeightScreen = ({ navigation }) => {
    const nextScreen = 'Weight';
    const prevScreen = 'Start';

    return (
        <ScreenContainer>
            <ContentContainer
                prevScreen={prevScreen}
                nextScreen={nextScreen}
                navigation={navigation}
            >
                <HeightDetails />
            </ContentContainer>
        </ScreenContainer>
    );
};

export default HeightScreen;
import React from 'react';
import SkierTypeDetails from '../components/details/SkierTypeDetails';
import { constants } from '../styles/common';
import ScreenContainer from '../components/utils/ScreenContainer';
import ContentContainer from '../components/utils/ContentContainer';

const SkierTypeScreen = ({ navigation }) => {
    const nextScreen = 'Receipt';
    const prevScreen = 'SoleLength';

    const segmentSelectHandler = (value) => {
        console.log(`Screen got the value: ${value}`);
    }

    return (
        <ScreenContainer>
            <ContentContainer
                prevScreen={prevScreen}
                nextScreen={nextScreen}
                navigation={navigation}
            >
                <SkierTypeDetails color={constants.MAIN_COLOR} />
            </ContentContainer>
        </ScreenContainer>
    );
};

export default SkierTypeScreen;
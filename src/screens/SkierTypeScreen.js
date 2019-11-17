import React from 'react';
import SkierTypeDetails from '../components/details/SkierTypeDetails';
import { constants } from '../styles/common';
import ScreenContainer from '../components/utils/ScreenContainer';
import ContentContainer from '../components/utils/ContentContainer';
import { setSkierType } from '../redux/actions';

const SkierTypeScreen = ({ navigation, dispatch }) => {
    const nextScreen = 'Receipt';
    const prevScreen = 'SoleLength';

    return (
        <ScreenContainer>
            <ContentContainer
                prevScreen={prevScreen}
                nextScreen={nextScreen}
                navigation={navigation}
            >
                <SkierTypeDetails
                    onChangeSkierType={(newValue) => dispatch(setSkierType(newValue))}
                    color={constants.MAIN_COLOR}
                />
            </ContentContainer>
        </ScreenContainer>
    );
};

export default SkierTypeScreen;
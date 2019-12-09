import React from 'react';
import SkierTypeDetails from '../components/details/SkierTypeDetails';
import { constants } from '../styles/common';
import ScreenContainer from '../components/utils/ScreenContainer';
import ContentContainer from '../components/utils/ContentContainer';
import { setSkierType } from '../redux/actions';
import validate from 'validate.js';
import { skierTypeConstraints } from '../non_react_js/validation';

const SkierTypeScreen = ({ skierType, dispatch, navigation }) => {
    const nextScreen = 'Receipt';
    const prevScreen = 'SoleLength';

    return (
        <ScreenContainer>
            <ContentContainer
                prevScreen={prevScreen}
                nextScreen={nextScreen}
                navigation={navigation}
                validator={() => validate(skierType, skierTypeConstraints, {fullMessages: false})}
            >
                <SkierTypeDetails
                    skierType={skierType}
                    onChangeSkierType={(newIndex, newValue) => dispatch(setSkierType(newIndex, newValue))}
                    color={constants.MAIN_COLOR}
                />
            </ContentContainer>
        </ScreenContainer>
    );
};

export default SkierTypeScreen;
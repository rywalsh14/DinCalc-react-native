import React from 'react';
import SoleLengthDetails from '../components/details/SoleLengthDetails';
import ScreenContainer from '../components/utils/ScreenContainer';
import ContentContainer from '../components/utils/ContentContainer';
import { setSoleLength } from '../redux/actions';

const SoleLengthScreen = ({ soleLength, dispatch, navigation }) => {
    const nextScreen = 'SkierType';
    const prevScreen = 'Age';

    return (
        <ScreenContainer>
            <ContentContainer
                prevScreen={prevScreen}
                nextScreen={nextScreen}
                navigation={navigation}
            >
                <SoleLengthDetails
                    soleLength={soleLength}
                    onChangeSoleLength={(newValue) => dispatch(setSoleLength(newValue))}
                />
            </ContentContainer>
        </ScreenContainer>
    );
};

export default SoleLengthScreen;
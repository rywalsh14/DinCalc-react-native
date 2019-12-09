import React from 'react';
import SoleLengthDetails from '../components/details/SoleLengthDetails';
import ScreenContainer from '../components/utils/ScreenContainer';
import ContentContainer from '../components/utils/ContentContainer';
import { setSoleLength } from '../redux/actions';
import validate from 'validate.js';
import { soleLengthConstraints } from '../non_react_js/validation';

const SoleLengthScreen = ({ soleLength, dispatch, navigation }) => {
    const nextScreen = 'SkierType';
    const prevScreen = 'Age';

    return (
        <ScreenContainer>
            <ContentContainer
                prevScreen={prevScreen}
                nextScreen={nextScreen}
                navigation={navigation}
                validator={() => validate({solelength: soleLength}, soleLengthConstraints, {fullMessages: false})}
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
import React from 'react';
import HeightDetails from '../components/details/HeightDetails';
import ScreenContainer from '../components/utils/ScreenContainer';
import ContentContainer from '../components/utils/ContentContainer';
import { setHeightFeet, setHeightInches } from '../redux/actions';

const HeightScreen = ({ navigation, height, dispatch }) => {
    const nextScreen = 'Weight';
    const prevScreen = 'Start';

    return (
        <ScreenContainer>
            <ContentContainer
                prevScreen={prevScreen}
                nextScreen={nextScreen}
                navigation={navigation}
            >
                <HeightDetails
                    height={height}
                    onChangeHeightFeet={(newValue) => dispatch(setHeightFeet(newValue))}
                    onChangeHeightInches={(newValue) => dispatch(setHeightInches(newValue))}
                />
            </ContentContainer>
        </ScreenContainer>
    );
};

export default HeightScreen;
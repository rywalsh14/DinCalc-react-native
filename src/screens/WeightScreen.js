import React from 'react';
import WeightDetails from '../components/details/WeightDetails';
import ScreenContainer from '../components/utils/ScreenContainer';
import ContentContainer from '../components/utils/ContentContainer';
import {Text} from 'react-native';

const WeightScreen = (props) => {
    const nextScreen = 'Age';
    const prevScreen = 'Height';

    console.log(props)

    return (
        <ScreenContainer>
            <ContentContainer
                prevScreen={prevScreen}
                nextScreen={nextScreen}
                navigation={props.navigation}
            >
                <WeightDetails />
            </ContentContainer>
        </ScreenContainer>
    );
};

export default WeightScreen;
import React from 'react';
import { View } from 'react-native';
import DinButton from '../components/utils/DinButton';
import SoleLengthDetails from '../components/details/SoleLengthDetails';
import { SCREEN_STYLES } from '../styles/common';
import ScreenContainer from '../components/utils/ScreenContainer';
import BackButton from '../components/utils/BackButton';

const SoleLengthScreen = ({ navigation }) => {
    const nextScreen = 'SkierType';
    const prevScreen = 'Age';

    return (
        <ScreenContainer>
            <View style={SCREEN_STYLES.screenRoot}>
                <BackButton navigation={navigation} prevScreen={prevScreen}  />
                <SoleLengthDetails />
                <DinButton title="Next" pressHandler={() => navigation.navigate(nextScreen)} />
            </View>
        </ScreenContainer>
    );
};

export default SoleLengthScreen;
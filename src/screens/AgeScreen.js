import React from 'react';
import { View } from 'react-native';
import DinButton from '../components/utils/DinButton';
import AgeDetails from '../components/details/AgeDetails';
import { SCREEN_STYLES } from '../styles/common';
import ScreenContainer from '../components/utils/ScreenContainer';
import BackButton from '../components/utils/BackButton';

const AgeScreen = ({ navigation }) => {
    const nextScreen = 'SoleLength';
    const prevScreen = 'Weight';

    return (
        <ScreenContainer>
            <View style={SCREEN_STYLES.screenRoot}>
                <BackButton navigation={navigation} prevScreen={prevScreen}  />
                <AgeDetails />
                <DinButton title="Next" pressHandler={() => navigation.navigate(nextScreen)} />
            </View>
        </ScreenContainer>
    );
};

export default AgeScreen;
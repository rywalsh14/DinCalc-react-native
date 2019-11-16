import React from 'react';
import { View } from 'react-native';
import DinButton from '../components/utils/DinButton';
import WeightDetails from '../components/details/WeightDetails';
import { SCREEN_STYLES } from '../styles/common';
import ScreenContainer from '../components/utils/ScreenContainer';
import BackButton from '../components/utils/BackButton';

const WeightScreen = ({ navigation }) => {
    const nextScreen = 'Age';
    const prevScreen = 'Height';

    return (
        <ScreenContainer>
            <View style={SCREEN_STYLES.screenRoot}>
                <BackButton navigation={navigation} prevScreen={prevScreen}  />
                <WeightDetails />
                <DinButton title="Next" pressHandler={() => navigation.navigate(nextScreen)} />
            </View>
        </ScreenContainer>
    );
};

export default WeightScreen;
import React from 'react';
import { View } from 'react-native';
import DinButton from '../components/utils/DinButton';
import HeightDetails from '../components/details/HeightDetails';
import { SCREEN_STYLES } from '../styles/common';
import ScreenContainer from '../components/utils/ScreenContainer';
import BackButton from '../components/utils/BackButton';

const HeightScreen = ({ navigation }) => {
    const nextScreen = 'Weight';
    const prevScreen = 'Start';

    return (
        <ScreenContainer>
            <View style={SCREEN_STYLES.screenRoot}>
                <BackButton navigation={navigation} prevScreen={prevScreen}  />
                <HeightDetails />
                <DinButton title="Next" pressHandler={() => navigation.navigate(nextScreen)} />
            </View>
        </ScreenContainer>
    );
};

export default HeightScreen;
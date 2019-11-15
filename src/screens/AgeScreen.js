import React from 'react';
import { View } from 'react-native';
import DinButton from '../components/utils/DinButton';
import AgeDetails from '../components/details/AgeDetails';
import { SCREEN_STYLES } from '../styles/common';

const AgeScreen = ({ navigation }) => {
    const nextScreen = 'SoleLength';

    return (
        <View style={SCREEN_STYLES.screenRoot}>
            <AgeDetails />
            <DinButton title="Next" pressHandler={() => navigation.navigate(nextScreen)} />
        </View>
    );
};

export default AgeScreen;
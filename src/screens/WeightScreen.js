import React from 'react';
import { View } from 'react-native';
import DinButton from '../components/utils/DinButton';
import WeightDetails from '../components/details/WeightDetails';
import { SCREEN_STYLES } from '../styles/common';

const WeightScreen = ({ navigation }) => {
    const nextScreen = 'Age';

    return (
        <View style={SCREEN_STYLES.screenRoot}>
            <WeightDetails />
            <DinButton title="Next" pressHandler={() => navigation.navigate(nextScreen)} />
        </View>
    );
};

export default WeightScreen;
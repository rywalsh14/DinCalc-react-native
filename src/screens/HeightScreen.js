import React from 'react';
import { View, StyleSheet } from 'react-native';
import DinButton from '../components/utils/DinButton';
import HeightDetails from '../components/details/HeightDetails';
import { SCREEN_STYLES } from '../styles/common';

const HeightScreen = ({ navigation }) => {
    const nextScreen = 'Weight';

    return (
        <View style={SCREEN_STYLES.screenRoot}>
            <HeightDetails />
            <DinButton title="Next" pressHandler={() => navigation.navigate(nextScreen)} />
        </View>
    );
};

export default HeightScreen;
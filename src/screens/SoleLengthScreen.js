import React from 'react';
import { View, StyleSheet } from 'react-native';
import DinButton from '../components/utils/DinButton';
import SoleLengthDetails from '../components/details/SoleLengthDetails';
import { SCREEN_STYLES } from '../styles/common';

const SoleLengthScreen = ({ navigation }) => {
    const nextScreen = 'SkierType';

    return (
        <View style={SCREEN_STYLES.screenRoot}>
            <SoleLengthDetails />
            <DinButton title="Next" pressHandler={() => navigation.navigate(nextScreen)} />
        </View>
    );
};

export default SoleLengthScreen;
import React from 'react';
import { View } from 'react-native';
import DinButton from '../components/utils/DinButton';
import SkierTypeDetails from '../components/details/SkierTypeDetails';
import { SCREEN_STYLES, constants } from '../styles/common';

const SkierTypeScreen = ({ navigation }) => {
    const nextScreen = 'Receipt';

    const segmentSelectHandler = (value) => {
        console.log(`Screen got the value: ${value}`);
    }

    return (
        <View style={SCREEN_STYLES.screenRoot}>
            <SkierTypeDetails color={constants.MAIN_COLOR} />
            <DinButton title="Fin" pressHandler={() => navigation.navigate(nextScreen)} />
        </View>
    );
};

export default SkierTypeScreen;
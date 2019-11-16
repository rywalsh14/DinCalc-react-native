import React from 'react';
import { View } from 'react-native';
import DinButton from '../components/utils/DinButton';
import SkierTypeDetails from '../components/details/SkierTypeDetails';
import { SCREEN_STYLES, constants } from '../styles/common';
import ScreenContainer from '../components/utils/ScreenContainer';
import BackButton from '../components/utils/BackButton';

const SkierTypeScreen = ({ navigation }) => {
    const nextScreen = 'Receipt';
    const prevScreen = 'SoleLength';

    const segmentSelectHandler = (value) => {
        console.log(`Screen got the value: ${value}`);
    }

    return (
        <ScreenContainer>
            <View style={SCREEN_STYLES.screenRoot}>
                <BackButton navigation={navigation} prevScreen={prevScreen}  />
                <SkierTypeDetails color={constants.MAIN_COLOR} />
                <DinButton title="Fin" pressHandler={() => navigation.navigate(nextScreen)} />
            </View>
        </ScreenContainer>
    );
};

export default SkierTypeScreen;
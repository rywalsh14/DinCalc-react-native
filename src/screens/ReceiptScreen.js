import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DinButton from '../components/utils/DinButton';
import { SCREEN_STYLES } from '../styles/common';
import ScreenContainer from '../components/utils/ScreenContainer';
import BackButton from '../components/utils/BackButton';

const ReceiptScreen = ({ navigation }) => {
    const prevScreen = 'SkierType';

    return (
        <ScreenContainer>
            <View style={SCREEN_STYLES.screenRoot}>
                <BackButton navigation={navigation} prevScreen={prevScreen}  />
                <Text>Finished!</Text>
            </View>
        </ScreenContainer>
    );
};

export default ReceiptScreen;
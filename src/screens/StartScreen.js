import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SCREEN_STYLES } from '../styles/common';
import DinButton from '../components/utils/DinButton';
import ScreenContainer from '../components/utils/ScreenContainer';

const StartScreen = ({ navigation }) => {
    const nextScreen = 'Height';

    return (
        <ScreenContainer>
            <View style={SCREEN_STYLES.screenRoot}>
                <Text style={styles.title}>DinCalc</Text>
                <DinButton 
                    title="Begin"
                    pressHandler={() => navigation.navigate(nextScreen)} 
                />
            </View>
        </ScreenContainer>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 60,
        fontStyle: 'italic',
        fontWeight: '600'
    }
});

export default StartScreen;
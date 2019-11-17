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
                <View style={styles.header}/>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>DinCalc</Text>
                </View>
                <View style={styles.buttonView}>
                    <DinButton 
                        title="Begin"
                        pressHandler={() => navigation.navigate(nextScreen)} 
                    />
                </View>
                <View style={styles.footer}/>
            </View>
        </ScreenContainer>
    );
};

const styles = StyleSheet.create({
    titleText: {
        fontSize: 60,
        fontStyle: 'italic',
        fontWeight: '600'
    },
    header: {
        flex: 1
    },
    titleView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    footer: {
        flex: 3
    }
});

export default StartScreen;
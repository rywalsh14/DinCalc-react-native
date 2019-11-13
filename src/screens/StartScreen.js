import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { constants } from '../styles/common';
import DinButton from '../components/DinButton';

const StartScreen = ({ navigation }) => {
    const nextScreen = 'Height';

    return (
        <View style={styles.rootView}>
            <Text style={styles.title}>DinCalc</Text>
            <DinButton 
                title="Begin"
                passedStyle={styles.button}
                pressHandler={() => navigation.navigate(nextScreen)} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    rootView: {
        alignItems: 'center'
    },
    title: {
        fontSize: 60,
        fontStyle: 'italic',
        fontWeight: '600'
    },
    button: {
        marginTop: 0
    }
});

export default StartScreen;
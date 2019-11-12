import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const handleBeginButtonPress = (navigation) => {
    navigation.navigate('Height');
};

const StartScreen = ({ navigation }) => {
    return (
        <View style={styles.rootView}>
            <Text style={styles.title}>DinCalc</Text>
            <TouchableOpacity onPress={() => handleBeginButtonPress(navigation)}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Begin</Text>
                </View>
            </TouchableOpacity>
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

    },
    buttonText: {
        fontSize: 24,
        fontWeight: '500',

        backgroundColor: '#66ccff',
        color: 'white',

        paddingVertical: 10,
        paddingHorizontal: 25,

        borderRadius: 5,
        overflow: 'hidden'
    }
});

export default StartScreen;
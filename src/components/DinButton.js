import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { constants } from '../styles/common'

const DinButton = ({ title, pressHandler, passedStyle }) => {
    return (
        <TouchableOpacity onPress={pressHandler}>
            <View style={passedStyle}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 24,
        fontWeight: '500',

        backgroundColor: constants.MAIN_COLOR,
        color: 'white',

        paddingVertical: 10,
        paddingHorizontal: 25,

        borderRadius: 8,
        overflow: 'hidden'
    }
});

export default DinButton;
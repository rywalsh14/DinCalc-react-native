import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SCREEN_STYLES, constants } from '../../styles/common';
import DinButton from './DinButton';

const BackButton = ({ title, navigation, prevScreen }) => {
    if (title == null){
        title = prevScreen
    }
    title = `‹ ${title} `
    
    return (
        <View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate(prevScreen)}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-start',
        marginLeft: 10
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '500',

        backgroundColor: constants.MAIN_COLOR,
        color: constants.BACKGROUND_COLOR,

        paddingVertical: 8,
        paddingHorizontal: 15,

        borderRadius: 18,
        overflow: 'hidden'
    }
})

export default BackButton
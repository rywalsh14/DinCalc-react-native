import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { constants } from '../../styles/common'

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
        fontSize: constants.FONT_SIZE.large_button,
        fontWeight: '500',

        backgroundColor: constants.MAIN_COLOR,
        color: constants.BACKGROUND_COLOR,

        paddingVertical: constants.LARGE_BUTTON_PADDING.vertical,
        paddingHorizontal: constants.LARGE_BUTTON_PADDING.horizontal,

        borderRadius: 12,
        overflow: 'hidden'
    }
});

export default DinButton;
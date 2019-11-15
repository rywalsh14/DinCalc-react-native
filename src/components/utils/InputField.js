import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { DETAIL_STYLES, constants } from '../../styles/common';

const InputField = ({ numeric, fieldLength, unit, passedStyle }) => {
    const keyboardType = (numeric ? 'numeric' : 'default')

    return (
        <View style={passedStyle}>
            <View style={styles.inputField}>
                <TextInput
                    keyboardType={keyboardType}
                    maxLength={fieldLength}
                    style={DETAIL_STYLES.textInput}
                    width={fieldLength * constants.FIELD_CHARACTER_WIDTH}
                    textAlign="center"
                />
                <Text style={DETAIL_STYLES.fieldUnit}>{` ${unit}`}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputField: {
        flexDirection: 'row'
    }
})

export default InputField;
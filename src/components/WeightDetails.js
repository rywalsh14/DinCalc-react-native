import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { DETAIL_STYLES, constants } from '../styles/common';

const WeightDetails = ({ passedStyle }) => {
    return (
        <View style={passedStyle}>
            <Text style={DETAIL_STYLES.label}>Weight:</Text>
            <View style={DETAIL_STYLES.fieldView}>
                <TextInput
                    keyboardType="numeric"
                    maxLength={3}
                    style={DETAIL_STYLES.textInput}
                    width={3 * constants.FIELD_CHARACTER_WIDTH}
                    textAlign="center"
                />
                <Text style={DETAIL_STYLES.fieldText}> lbs. </Text>
            </View>
        </View>
    );
};

export default WeightDetails;

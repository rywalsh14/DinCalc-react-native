import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { DETAIL_STYLES, constants } from '../styles/common';

const HeightDetails = ({ passedStyle }) => {
    return (
        <View style={passedStyle}>
            <Text style={DETAIL_STYLES.label}>Height:</Text>
            <View style={DETAIL_STYLES.fieldView}>
                <TextInput
                    keyboardType="numeric"
                    maxLength={1}
                    style={DETAIL_STYLES.textInput}
                    width={1 * constants.FIELD_CHARACTER_WIDTH}
                    textAlign="center"
                />
                <Text style={DETAIL_STYLES.fieldText}> ft. </Text>
                <TextInput
                    keyboardType="numeric"
                    maxLength={2}
                    style={DETAIL_STYLES.textInput}
                    width={2 * constants.FIELD_CHARACTER_WIDTH}
                    textAlign="center"
                />
                <Text style={DETAIL_STYLES.fieldText}> in.</Text>
            </View>
        </View>
    );
};

export default HeightDetails;
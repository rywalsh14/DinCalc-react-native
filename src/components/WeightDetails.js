import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { DETAIL_STYLES, constants } from '../styles/common';
import InputField from './InputField';

const WeightDetails = ({ passedStyle }) => {
    return (
        <View style={passedStyle}>
            <Text style={DETAIL_STYLES.label}>Weight:</Text>
            <InputField 
                numeric={true}
                fieldLength={3}
                unit="lbs."
            />
        </View>
    );
};

export default WeightDetails;

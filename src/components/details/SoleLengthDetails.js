import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { DETAIL_STYLES, constants } from '../../styles/common';
import InputField from '../utils/InputField';

const SoleLengthDetails = ({ passedStyle }) => {
    return (
        <View style={passedStyle}>
            <Text style={DETAIL_STYLES.label}>SoleLength:</Text>
            <InputField 
                numeric={true}
                fieldLength={3}
                unit="mm."
            />
        </View>
    );
};

export default SoleLengthDetails;
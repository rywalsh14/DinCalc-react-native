import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { DETAIL_STYLES, constants } from '../../styles/common';
import InputField from '../utils/InputField';

const HeightDetails = ({ passedStyle }) => {
    return (
        <View style={passedStyle}>
            <Text style={DETAIL_STYLES.label}>Height:</Text>
            <View style={styles.heightInput}>
                <InputField 
                    numeric={true}
                    fieldLength={1}
                    unit="ft."
                />
                <InputField 
                    numeric={true}
                    fieldLength={2}
                    unit="in."
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    heightInput: {
        flexDirection: 'row'
    }
})

export default HeightDetails;
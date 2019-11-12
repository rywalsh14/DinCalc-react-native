import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const HeightDetails = ({ passedStyle }) => {
    return (
        <View style={passedStyle}>
            <Text style={styles.label}>Height:</Text>
            <View style={styles.fieldView}>
                <TextInput
                    keyboardType="numeric"
                    maxLength={1}
                    style={styles.input}
                    width={40}
                />
                <Text style={styles.fieldText}> ft. </Text>
                <TextInput
                    keyboardType="numeric"
                    maxLength={2}
                    style={styles.input}
                    width={70}
                />
                <Text style={styles.fieldText}> in.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: 36
    },
    fieldView: {
        marginTop: 10,
        flexDirection: 'row',
    },
    input: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        fontSize: 48
    },
    fieldText: {
        fontSize: 48
    }
});

export default HeightDetails;
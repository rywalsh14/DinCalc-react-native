import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ROUND_BUTTON_STYLES } from '../../styles/common';

const RestartButton = ({ navigation, dispatch }) => {
    const title = 'Restart';
    const targetScreen = 'Height';
    
    return (
        <TouchableOpacity onPress={() => navigation.navigate(targetScreen)}>
            <Text style={ROUND_BUTTON_STYLES.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default RestartButton;
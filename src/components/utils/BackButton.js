import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ROUND_BUTTON_STYLES } from '../../styles/common';

const BackButton = ({ title, navigation, prevScreen }) => {
    if (title == null){
        title = prevScreen
    }
    title = `‹ ${title} `
    
    return (
        <TouchableOpacity onPress={() => navigation.navigate(prevScreen)}>
            <Text style={ROUND_BUTTON_STYLES.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default BackButton;
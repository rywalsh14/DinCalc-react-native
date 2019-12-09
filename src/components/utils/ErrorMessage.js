import React from 'react';
import { View, Text } from 'react-native';
import { ERROR_STYLES } from '../../styles/common';

const ErrorMessage = ({ style, errorMessage }) => {
    return (
        <View style={style}>
            <Text style={ERROR_STYLES.text}>{errorMessage}</Text>
        </View>
    );
};

export default ErrorMessage
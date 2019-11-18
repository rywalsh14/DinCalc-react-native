import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ROUND_BUTTON_STYLES } from '../../styles/common';
import { clearAllValues } from '../../redux/actions';

const RestartButton = ({ navigation, dispatch }) => {
    const title = 'Restart';
    const targetScreen = 'Height';

    const handleRestartButtonPress = () => {
        dispatch(clearAllValues())
        navigation.navigate(targetScreen)
    }
    
    return (
        <TouchableOpacity onPress={handleRestartButtonPress}>
            <Text style={ROUND_BUTTON_STYLES.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default RestartButton;
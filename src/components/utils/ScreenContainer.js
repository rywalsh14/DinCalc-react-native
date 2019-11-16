import React from 'react';
import { View } from 'react-native';
import { SCREEN_STYLES } from '../../styles/common';

const ScreenContainer = ({ children }) => {
    return(
        <View style={SCREEN_STYLES.screenContainer} >
            {children}
        </View>
    );
};

export default ScreenContainer
import React from 'react';
import { SafeAreaView } from 'react-native';
import { SCREEN_STYLES } from '../../styles/common';

const ScreenContainer = ({ children }) => {
    return(
        <SafeAreaView style={SCREEN_STYLES.screenContainer} >
            {children}
        </SafeAreaView>
    );
};

export default ScreenContainer
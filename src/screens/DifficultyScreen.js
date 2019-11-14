import React from 'react';
import { View, StyleSheet } from 'react-native';
import DinButton from '../components/utils/DinButton';
import SegmentedControl from '../components/utils/SegmentedControl';

const DifficultyScreen = ({ navigation }) => {
    const nextScreen = 'Start';

    return (
        <View>
            <SegmentedControl options={['1', '2', '3']} />
        </View>
    );
};

export default DifficultyScreen;
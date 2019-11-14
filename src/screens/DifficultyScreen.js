import React from 'react';
import { View, StyleSheet } from 'react-native';
import DinButton from '../components/utils/DinButton';
import SegmentedControl from '../components/utils/SegmentedControl';

const DifficultyScreen = ({ navigation }) => {
    const nextScreen = 'Start';

    const segmentSelectHandler = (value) => {
        console.log(`I am THE parent, and I got the value: ${value}`);
    }

    return (
        <View>
            <SegmentedControl 
                options={['I', 'II', 'III']}
                onSegmentSelect={segmentSelectHandler}
            />
        </View>
    );
};

export default DifficultyScreen;
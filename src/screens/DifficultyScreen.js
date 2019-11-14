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
                options={['1', '2', '3']}
                onSegmentSelect={segmentSelectHandler}
            />
        </View>
    );
};

export default DifficultyScreen;
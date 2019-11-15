import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DETAIL_STYLES, constants } from '../../styles/common';
import SegmentedControl from '../utils/SegmentedControl';

const SkierTypeDetails = ({ passedStyle }) => {
    const nextScreen = 'Start';

    const segmentSelectHandler = (value) => {
        console.log(`I am THE parent, and I got the value: ${value}`);
    }

    return (
        <View style={passedStyle}>
            <Text style={DETAIL_STYLES.label}>Skier Type:</Text>
            <SegmentedControl 
                options={['I', 'III', 'III']}
                onSegmentSelect={segmentSelectHandler}
                fontSize={constants.INPUT_FONT_SIZE}
            />
        </View>
    );
};

export default SkierTypeDetails;
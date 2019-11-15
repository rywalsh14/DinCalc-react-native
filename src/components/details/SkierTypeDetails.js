import React from 'react';
import { View, Text } from 'react-native';
import { DETAIL_STYLES, constants } from '../../styles/common';
import SegmentedControl from '../utils/SegmentedControl';

const SkierTypeDetails = ({ color }) => {
    const segmentSelectHandler = (value) => {
        console.log(`I am THE parent, and I got the value: ${value}`);
    }

    return (
        <View>
            <Text style={DETAIL_STYLES.fieldLabel}>Skier Type:</Text>
            <SegmentedControl 
                options={['I', 'III', 'III']}
                onSegmentSelect={segmentSelectHandler}
                fontSize={constants.INPUT_FONT_SIZE}
                color={color}
            />
        </View>
    );
};

export default SkierTypeDetails;
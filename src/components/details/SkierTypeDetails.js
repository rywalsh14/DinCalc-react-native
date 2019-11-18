import React from 'react';
import { View, Text } from 'react-native';
import { DETAIL_STYLES, constants } from '../../styles/common';
import SegmentedControl from '../utils/SegmentedControl';

const SkierTypeDetails = ({ skierType, onChangeSkierType, color }) => {
    return (
        <View>
            <Text style={DETAIL_STYLES.fieldLabel}>Skier Type:</Text>
            <View style={DETAIL_STYLES.fieldInputView}>
                <SegmentedControl
                    selectedIndex={skierType.index}
                    options={['I', 'II', 'III']}
                    onSegmentSelect={onChangeSkierType}
                    fontSize={constants.SEGMENT_FONT_SIZE}
                    color={color}
                />
            </View>
        </View>
    );
};

export default SkierTypeDetails;
import React from 'react';
import { View, Text } from 'react-native';
import { DETAIL_STYLES, constants } from '../../styles/common';
import SegmentedControl from '../utils/SegmentedControl';

const SkierTypeDetails = ({ skierType, onChangeSkierType, mainColor, secondaryColor }) => {
    return (
        <View>
            <Text style={DETAIL_STYLES.fieldLabel}>Skier Type:</Text>
            <View style={DETAIL_STYLES.fieldInputView}>
                <SegmentedControl
                    selectedIndex={skierType.index}
                    options={['I', 'II', 'III']}
                    onSegmentSelect={onChangeSkierType}
                    fontSize={constants.FONT_SIZE.segment}
                    mainColor={mainColor}
                    secondaryColor={secondaryColor}
                />
            </View>
        </View>
    );
};

export default SkierTypeDetails;
import React from 'react';
import { View, Text } from 'react-native';
import { DETAIL_STYLES } from '../../styles/common';
import InputField from '../utils/InputField';

const WeightDetails = ({ weight, onChangeWeight }) => {
    return (
        <View>
            <Text style={DETAIL_STYLES.fieldLabel}>Weight:</Text>
            <View style={DETAIL_STYLES.fieldInputView}>
            <InputField
                value={weight}
                onChangeText={onChangeWeight}
                numeric={true}
                fieldLength={3}
                unit="lbs."
            />
            </View>
        </View>
    );
};

export default WeightDetails;

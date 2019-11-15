import React from 'react';
import { View, Text } from 'react-native';
import { DETAIL_STYLES } from '../../styles/common';
import InputField from '../utils/InputField';

const WeightDetails = () => {
    return (
        <View>
            <Text style={DETAIL_STYLES.fieldLabel}>Weight:</Text>
            <InputField 
                numeric={true}
                fieldLength={3}
                unit="lbs."
            />
        </View>
    );
};

export default WeightDetails;

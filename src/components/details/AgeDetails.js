import React from 'react';
import { View, Text } from 'react-native';
import { DETAIL_STYLES } from '../../styles/common';
import InputField from '../utils/InputField';

const AgeDetails = () => {
    return (
        <View>
            <Text style={DETAIL_STYLES.fieldLabel}>Age:</Text>
            <InputField 
                numeric={true}
                fieldLength={3}
                unit="yrs."
            />
        </View>
    );
};

export default AgeDetails;
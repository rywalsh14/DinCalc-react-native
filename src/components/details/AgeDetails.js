import React from 'react';
import { View, Text } from 'react-native';
import { DETAIL_STYLES } from '../../styles/common';
import InputField from '../utils/InputField';

const AgeDetails = ({ age, onChangeAge }) => {
    return (
        <View>
            <Text style={DETAIL_STYLES.fieldLabel}>Age:</Text>
            <View style={DETAIL_STYLES.fieldInputView}>
                <InputField
                    value={age}
                    onChangeText={onChangeAge}
                    numeric={true}
                    fieldLength={3}
                    unit="yrs."
                />
            </View>
        </View>
    );
};

export default AgeDetails;
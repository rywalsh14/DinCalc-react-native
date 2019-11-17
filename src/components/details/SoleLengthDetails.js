import React from 'react';
import { View, Text } from 'react-native';
import { DETAIL_STYLES } from '../../styles/common';
import InputField from '../utils/InputField';

const SoleLengthDetails = ({ soleLength, onChangeSoleLength }) => {
    return (
        <View>
            <Text style={DETAIL_STYLES.fieldLabel}>Sole length:</Text>
            <View style={DETAIL_STYLES.fieldInputView}>
                <InputField
                    value={soleLength}
                    onChangeText={onChangeSoleLength}
                    numeric={true}
                    fieldLength={3}
                    unit="mm."
                />
            </View>
        </View>
    );
};

export default SoleLengthDetails;
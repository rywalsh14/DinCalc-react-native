import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DETAIL_STYLES } from '../../styles/common';
import InputField from '../utils/InputField';

const HeightDetails = ({ height, onChangeHeightFeet, onChangeHeightInches }) => {
    return (
        <View>
            <Text style={DETAIL_STYLES.fieldLabel}>Height:</Text>
            <View style={[DETAIL_STYLES.fieldInputView, styles.heightInput]}>
                <InputField 
                    value={height.feet}
                    onChangeText={onChangeHeightFeet}
                    numeric={true}
                    fieldLength={1}
                    unit="ft. "
                />
                <InputField
                    value={height.inches}
                    onChangeText={onChangeHeightInches}
                    numeric={true}
                    fieldLength={2}
                    unit="in."
                />
            </View>
        </View>
    );
};

// special style for the multi-input-field view
const styles = StyleSheet.create({
    heightInput: {
        flexDirection: 'row'
    }
})

export default HeightDetails;
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const radius = 8;
const borderWeight = 2;

const validate = (options) => {
    if (options === undefined) {
        throw "SegmentedControl: Missing required prop 'options'";
    }
    if (options.length < 2) {
        throw `SegmentedControl: Must provide at least 2 options for SegmentedControl. Provided (${options.length})`;
    }
};

const getSegmentStyle = (options, index) => {
    if (index === 0) {
        // left-most segment
        return styles.segmentLeft;
    }
    else if (index === options.length-1) {
        // right-most segment
        return styles.segmentRight;
    }
    else {
        return styles.segmentMiddle;
    }
}

const Segment = ({ value, style, pressHandler }) => {
    return (
        <TouchableOpacity onPress={() => pressHandler(value)}>
            <View style={[styles.segment, style]}>
                <Text style={styles.segmentText}>{value}</Text>
            </View>
        </TouchableOpacity>
    );
};

const SegmentedControl = ({ options, onSegmentSelect }) => {
    const pressHandler = (value) => {
        onSegmentSelect(value);
    }

    validate(options);

    segmentedControl = [];
    for (let i = 0; i < options.length; i++){
        segmentedControl.push(
            <Segment 
                key={i} 
                value={options[i]}
                style={getSegmentStyle(options, i)}
                pressHandler={pressHandler}
            />
        );
    }

    return (
        <View style={styles.root}>
            {segmentedControl}
        </View>
    );
};

// IDEA: don't add horizontal padding, set one width for all segments based on widest value! Ex: I,II,III all are different widths right now

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row'
    },
    segment: {
        borderWidth: borderWeight,
        borderColor: 'black',
        paddingHorizontal: 30
    },
    segmentText: {
        fontSize: 42
    },
    segmentLeft: {
        borderBottomLeftRadius: radius,
        borderTopLeftRadius: radius
    },
    segmentRight: {
        borderBottomRightRadius: radius,
        borderTopRightRadius: radius
    },
    segmentMiddle: {
        borderRightWidth: borderWeight/2,
        borderLeftWidth: borderWeight/2
    }
});

export default SegmentedControl;
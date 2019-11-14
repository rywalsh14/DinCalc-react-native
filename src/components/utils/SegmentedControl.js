import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const radius = 8;
const borderWeight = 2;
const defaultSegmentFontSize = 72;

const validate = (options) => {
    if (options === undefined) {
        throw "SegmentedControl: Missing required prop 'options'";
    }
    if (options.length < 2) {
        throw `SegmentedControl: Must provide at least 2 options for SegmentedControl. Provided (${options.length})`;
    }
};

const calculateSegmentWidth = (options, segmentFontSize) => {
    let longest = 0;
    for (let i = 0; i < options.length; i++){
        if (options.length > longest){
            longest = options[i].length;
        }
    }
    return longest * (segmentFontSize / 4);
};

const getSegmentBorderStyle = (options, index) => {
    let segmentStyle;
    if (index === 0) {
        // left-most segment
        return commonStyles.segmentLeft;
    }
    else if (index === options.length-1) {
        // right-most segment
        return commonStyles.segmentRight;
    }
    else {
        return commonStyles.segmentMiddle;
    }
};

const Segment = ({ value, pressHandler, style, textStyle }) => {
    return (
        <TouchableOpacity onPress={() => pressHandler(value)}>
            <View style={style}>
                <Text style={textStyle}>{value}</Text>
            </View>
        </TouchableOpacity>
    );
};

const SegmentedControl = ({ options, onSegmentSelect, fontSize }) => {
    const pressHandler = (value) => {
        onSegmentSelect(value);
    }

    const segmentFontSize = (fontSize !== undefined) ? fontSize : defaultSegmentFontSize;
    const segmentWidth = calculateSegmentWidth(options, segmentFontSize);

    // define styles based on font size
    const styles = StyleSheet.create({
        segment: {
            borderWidth: borderWeight,
            borderColor: 'black',
            paddingHorizontal: segmentFontSize/2
        },
        segmentText: {
            fontSize: segmentFontSize,
            textAlign: 'center',
            minWidth: segmentWidth
        }
    });

    segmentedControl = [];
    for (let i = 0; i < options.length; i++){
        segmentedControl.push(
            <Segment 
                key={i} 
                value={options[i]}
                style={[styles.segment, getSegmentBorderStyle(options, i)]}
                textStyle={styles.segmentText}
                pressHandler={pressHandler}
            />
        );
    }

    return (
        <View style={commonStyles.root}>
            {segmentedControl}
        </View>
    );
};

const commonStyles = StyleSheet.create({
    root: {
        flexDirection: 'row'
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
})

export default SegmentedControl;
import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const radius = 15;
const borderWeight = 2;
const defaultSegmentFontSize = 24;
const defaultMainColor = 'black';
const defaultSecondaryColor = 'white';

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

const Segment = ({ value, pressHandler, viewStyle, textStyle, index }) => {
    return (
        <TouchableOpacity onPress={() => pressHandler(index, value)}>
            <View style={viewStyle}>
                <Text style={textStyle}>{value}</Text>
            </View>
        </TouchableOpacity>
    );
};

const SegmentedControl = ({ selectedIndex, options, onSegmentSelect, fontSize, mainColor, secondaryColor }) => {
    [selectedSegment, updateSelectedSegment] = useState(selectedIndex);
    validate(options);

    const pressHandler = (index, value) => {
        // visually toggle, then call parent's callback function
        updateSelectedSegment(index);
        onSegmentSelect(index, value);
    };

    const segmentMainColor = (mainColor !== undefined) ? mainColor : defaultMainColor;
    const segmentSecondaryColor = (secondaryColor !== undefined) ? secondaryColor : defaultSecondaryColor;
    const segmentFontSize = (fontSize !== undefined) ? fontSize : defaultSegmentFontSize;
    const segmentWidth = calculateSegmentWidth(options, segmentFontSize);

    // define styles based on font size
    const styles = StyleSheet.create({
        segmentView: {
            borderWidth: borderWeight,
            borderColor: segmentMainColor,
            paddingHorizontal: segmentFontSize/2
        },
        segmentText: {
            color: segmentMainColor,
            fontSize: segmentFontSize,
            textAlign: 'center',
            minWidth: segmentWidth,
            fontWeight: '600'
        },
        selectedSegmentView: {
            backgroundColor: segmentMainColor
        },
        selectedSegmentText: {
            color: segmentSecondaryColor
        }
    });

    segmentedControl = [];
    for (let i = 0; i < options.length; i++){

        viewStyle = [styles.segmentView, getSegmentBorderStyle(options, i)];
        textStyle = [styles.segmentText];

        // if this is the selected segment, append additional styling
        if (i === selectedSegment){
            viewStyle.push(styles.selectedSegmentView);
            textStyle.push(styles.selectedSegmentText)
        }


        segmentedControl.push(
            <Segment 
                key={i} 
                value={options[i]}
                viewStyle={viewStyle}
                textStyle={textStyle}
                index={i}
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
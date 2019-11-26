import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { constants } from '../../styles/common';
import RestartButton from '../utils/RestartButton';

const SummaryItem = ({ label, value }) => {
    label = `${label}:`
    return (
        <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>{label}</Text>
            <Text style={styles.summaryValue}>{value}</Text>
        </View>
    );
};

const ReceiptDetails = ({height, weight, age, soleLength, skierType, din, dispatch, navigation}) => {
    const heightString = `${height.feet}' ${height.inches}"`;
    const weightString = `${weight} lbs.`;
    const ageString = `${age} yrs.`;
    const soleLengthString = `${soleLength} mm.`;
    const skierTypeString = `${skierType.value}`;
    const dinString = `${din.rowLetter} - ${din.value}`;

    return (
        <View style={styles.mainView}>
            <View style={styles.summaryView}>
                <Text style={styles.title}>Summary:</Text>
                <View style={styles.summaryItemsView}>
                    <SummaryItem label="Height" value={heightString} />
                    <SummaryItem label="Weight" value={weightString} />
                    <SummaryItem label="Age" value={ageString} />
                    <SummaryItem label="Sole length" value={soleLengthString} />
                    <SummaryItem label="Skier type" value={skierTypeString} />
                </View>
            </View>
            <View style={styles.titleView}>
                <Text style={styles.title}>Din:</Text>
                <Text style={styles.dinValue}>{dinString}</Text>
            </View>
            <View style={styles.restartButtonView}>
                <RestartButton
                    dispatch={dispatch}
                    navigation={navigation}
                />
            </View>
        </View>
    );
};

const row_gap = 20

styles = StyleSheet.create({
    title: {
        fontSize: constants.FONT_SIZE.secondary,
        fontWeight: '700',
        fontStyle: 'italic',
        alignSelf: 'center'
    },
    summaryLabel: {
        fontWeight: '400'
    },
    summaryValue: {
        color: constants.MAIN_COLOR,
        fontSize: constants.FONT_SIZE.secondary,
        fontWeight: '500'
    },
    summaryItem: {
        marginTop: 5,
        marginLeft: row_gap
    },
    mainView: {
        flex: 1,
        alignSelf: 'flex-start',
        alignItems: 'stretch'
    },
    summaryItemsView: {
        marginTop: 10,
        marginHorizontal: 50 - row_gap,
        flexWrap: 'wrap'
    },
    dinView: {
        marginTop: 20,
        alignItems: 'center'
    },
    dinValue: {
        marginTop: 10,
        fontSize: constants.FONT_SIZE.primary,
        fontWeight: '600',
        color: constants.MAIN_COLOR
    },
    summaryView: {
        flex: 5
    },
    titleView: {
        flex: 3,
        alignItems: 'center'
    },
    restartButtonView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center'
    }
});

export default ReceiptDetails;
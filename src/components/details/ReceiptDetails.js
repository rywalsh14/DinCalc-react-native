import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { constants } from '../../styles/common';

const SummaryItem = ({ label, value }) => {
    label = `${label}:`
    return (
        <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>{label}</Text>
            <Text style={styles.summaryValue}>{value}</Text>
        </View>
    );
};

const ReceiptDetails = ({height, weight, age, soleLength, skierType, din}) => {
    const heightString = `${height.feet}' ${height.inches}"`;
    const weightString = `${weight} lbs.`;
    const ageString = `${age} yrs.`;
    const soleLengthString = `${soleLength} mm.`;
    const skierTypeString = `${skierType.value}`;
    const dinString = `${din.rowLetter} - ${din.value}`;

    return (
        <View style={styles.mainView}>
            <View style={styles.summaryView}>
                <Text style={styles.summaryTitle}>Summary:</Text>
                <View style={styles.summaryItemsView}>
                    <SummaryItem label="Height" value={heightString} />
                    <SummaryItem label="Weight" value={weightString} />
                    <SummaryItem label="Age" value={ageString} />
                    <SummaryItem label="Sole length" value={soleLengthString} />
                    <SummaryItem label="Skier type" value={skierTypeString} />
                </View>
            </View>
            <View style={styles.dinView}>
                <Text style={styles.summaryTitle}>Din:</Text>
                <Text style={styles.dinValue}>{dinString}</Text>
            </View>
        </View>
    );
};

styles = StyleSheet.create({
    summaryTitle: {
        fontSize: 28,
        fontWeight: '700',
        fontStyle: 'italic',
        alignSelf: 'center'
    },
    summaryLabel: {
        fontWeight: '400'
    },
    summaryValue: {
        color: constants.MAIN_COLOR,
        fontSize: 36,
        fontWeight: '500'
    },
    summaryItem: {
        marginTop: 5
    },
    mainView: {
        flex: 1,
        alignSelf: 'flex-start',
        alignItems: 'stretch'
    },
    summaryItemsView: {
        marginTop: 10,
        marginHorizontal: 50
    },
    dinView: {
        marginTop: 20,
        alignItems: 'center'
    },
    dinValue: {
        marginTop: 10,
        fontSize: 64,
        fontWeight: '600',
        color: constants.MAIN_COLOR
    }
});

export default ReceiptDetails;
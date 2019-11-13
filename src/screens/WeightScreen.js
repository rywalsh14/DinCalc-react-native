import React from 'react';
import { View, StyleSheet } from 'react-native';
import DinButton from '../components/DinButton';
import WeightDetails from '../components/WeightDetails';

const WeightScreen = ({ navigation }) => {
    const nextScreen = 'Start';

    return (
        <View style={styles.rootView}>
            <WeightDetails passedStyle={styles.field} />
            <DinButton title="Next" pressHandler={() => navigation.navigate(nextScreen)} />
        </View>
    );
};

const styles = StyleSheet.create({
    rootView: {
        alignItems: 'center'
    },
    field: {
        marginTop: 50
    }
});

export default WeightScreen;
import React from 'react';
import { View, StyleSheet } from 'react-native';
import DinButton from '../components/utils/DinButton';
import WeightDetails from '../components/details/WeightDetails';

const WeightScreen = ({ navigation }) => {
    const nextScreen = 'Age';

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
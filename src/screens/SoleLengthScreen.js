import React from 'react';
import { View, StyleSheet } from 'react-native';
import DinButton from '../components/utils/DinButton';
import SoleLengthDetails from '../components/details/SoleLengthDetails';

const SoleLengthScreen = ({ navigation }) => {
    const nextScreen = 'Start';

    return (
        <View style={styles.rootView}>
            <SoleLengthDetails passedStyle={styles.field} />
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

export default SoleLengthScreen;
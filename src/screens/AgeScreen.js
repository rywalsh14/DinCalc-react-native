import React from 'react';
import { View, StyleSheet } from 'react-native';
import DinButton from '../components/utils/DinButton';
import AgeDetails from '../components/details/AgeDetails';

const AgeScreen = ({ navigation }) => {
    const nextScreen = 'SoleLength';

    return (
        <View style={styles.rootView}>
            <AgeDetails passedStyle={styles.field} />
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

export default AgeScreen;
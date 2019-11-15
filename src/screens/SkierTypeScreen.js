import React from 'react';
import { View, StyleSheet } from 'react-native';
import DinButton from '../components/utils/DinButton';
import SkierTypeDetails from '../components/details/SkierTypeDetails';

const SkierTypeScreen = ({ navigation }) => {
    const nextScreen = 'Receipt';

    const segmentSelectHandler = (value) => {
        console.log(`Screen got the value: ${value}`);
    }

    return (
        <View style={styles.rootView}>
            <SkierTypeDetails passedStyle={styles.field} />
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

export default SkierTypeScreen;
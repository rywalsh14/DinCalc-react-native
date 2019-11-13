import React from 'react';
import { View, StyleSheet } from 'react-native';
import DinButton from '../components/utils/DinButton';
import HeightDetails from '../components/details/HeightDetails';

const HeightScreen = ({ navigation }) => {
    const nextScreen = 'Weight';

    return (
        <View style={styles.rootView}>
            <HeightDetails passedStyle={styles.field} />
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

export default HeightScreen;
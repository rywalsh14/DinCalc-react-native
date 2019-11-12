import React from 'react';
import { View, StyleSheet } from 'react-native';
import HeightDetails from '../components/HeightDetails';

const HeightScreen = () => {
    return (
        <View style={styles.rootView}>
            <HeightDetails 
                passedStyle={styles.field}
            />
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
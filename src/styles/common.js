import { StyleSheet } from 'react-native';

export const constants = {
    MAIN_COLOR: '#66ccff',
    FIELD_CHARACTER_WIDTH: 32
}

export const DETAIL_STYLES = StyleSheet.create({
    label: {
        fontSize: 36
    },
    fieldView: {
        marginTop: 10,
        flexDirection: 'row',
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        fontSize: 48,
    },
    fieldText: {
        fontSize: 48
    }
});
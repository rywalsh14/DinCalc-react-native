import { StyleSheet } from 'react-native';

export const constants = {
    MAIN_COLOR: '#66ccff',
    FIELD_CHARACTER_WIDTH: 32,
    LABEL_FONT_SIZE: 36,
    INPUT_FONT_SIZE: 48,
}

export const DETAIL_STYLES = StyleSheet.create({
    label: {
        fontSize: constants.LABEL_FONT_SIZE
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        fontSize: INPUT_FONT_SIZE,
    },
    fieldText: {
        fontSize: INPUT_FONT_SIZE
    },
    detailRoot: {

    }
});

export const SCREEN_STYLES = StyleSheet.create({
    screenRoot: {
        alignItems: 'center'
    }
})
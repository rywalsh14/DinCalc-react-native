import { StyleSheet } from 'react-native';

export const constants = {
    MAIN_COLOR: '#66ccff',
    FIELD_CHARACTER_WIDTH: 32,
    LABEL_FONT_SIZE: 36,
    INPUT_FONT_SIZE: 48,
}

export const DETAIL_STYLES = StyleSheet.create({
    fieldLabel: {
        fontSize: constants.LABEL_FONT_SIZE,
        color: constants.MAIN_COLOR
    },
    textInput: {
        borderColor: constants.MAIN_COLOR,
        color: constants.MAIN_COLOR,
        borderWidth: 2,
        borderRadius: 5,
        fontSize: constants.INPUT_FONT_SIZE,
    },
    fieldUnit: {
        fontSize: constants.INPUT_FONT_SIZE,
        color: constants.MAIN_COLOR
    }
});

export const SCREEN_STYLES = StyleSheet.create({
    screenRoot: {
        alignItems: 'center',
        marginTop: 50
    }
});
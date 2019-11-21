import { StyleSheet, Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');
const isLargeScreen = dimensions.width > 350;

const getFontSizes = () => {
    if (isLargeScreen){
        return {
            primary: 64,
            secondary: 36,
            segment: 62,
            large_button: 24,
            small_button: 18
        }
    }
    else {
        return {
            primary: 56,
            secondary: 28,
            segment: 54,
            large_button: 18,
            small_button: 14
        }
    }
};

const getCharWidth = () => {
    return isLargeScreen ? 48 : 40;
};

const getLargeButtonPadding = () => {
    if (isLargeScreen) {
        return {
            vertical: 10,
            horizontal: 25
        };
    }
    else {
        return {
            vertical: 8,
            horizontal: 15
        };
    }
};

getSmallButtonRadius = () => {
    if (isLargeScreen) {
        return 18;
    }
    else {
        return  16;
    }
};

export const constants = {
    MAIN_COLOR: '#62bcfa',
    BACKGROUND_COLOR:'#fdf6e3',
    FIELD_CHARACTER_WIDTH: getCharWidth(),
    FONT_SIZE: getFontSizes(),
    LARGE_BUTTON_PADDING: getLargeButtonPadding()
};

export const DETAIL_STYLES = StyleSheet.create({
    fieldLabel: {
        fontSize: constants.FONT_SIZE.secondary,
        fontWeight: "400",
        color: constants.MAIN_COLOR,
        marginLeft: 10
    },
    fieldInputView:{
        marginTop: 25
    },
    textInput: {
        borderColor: constants.MAIN_COLOR,
        color: constants.MAIN_COLOR,
        borderWidth: 2,
        borderRadius: 5,
        fontSize: constants.FONT_SIZE.primary,
    },
    fieldUnit: {
        fontSize: constants.FONT_SIZE.primary,
        fontWeight: "500",
        color: constants.MAIN_COLOR
    }
});

export const SCREEN_STYLES = StyleSheet.create({
    screenContainer: {
        backgroundColor: constants.BACKGROUND_COLOR,
        ...StyleSheet.absoluteFillObject
    },
    screenRoot: {
        alignItems: 'center',
        ...StyleSheet.absoluteFillObject
    }
});

export const ROUND_BUTTON_STYLES = StyleSheet.create({
    buttonText: {
        fontSize: constants.FONT_SIZE.small_button,
        fontWeight: '500',

        backgroundColor: constants.MAIN_COLOR,
        color: constants.BACKGROUND_COLOR,

        paddingVertical: 8,
        paddingHorizontal: 15,

        borderRadius: getSmallButtonRadius(),
        overflow: 'hidden'
    }
});
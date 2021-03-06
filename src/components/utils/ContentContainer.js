import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SCREEN_STYLES } from '../../styles/common';
import BackButton from './BackButton';
import DinButton from './DinButton';
import ErrorMessage from './ErrorMessage';

const ContentContainer = ({ prevScreen, nextScreen, navigation, children, isReceiptScreen, validator }) => {
    [errors, updateErrors] = useState({});

    const handleNextButtonPress = () => {
        if (validator){
            // perform validation if a validator is provided
            validationErrors = validator();

            if (validationErrors){
                // if errors, display them & don't navigate
                updateErrors(validationErrors);
            }
            else {
                // clear errors and navigate
                updateErrors({});
                navigation.navigate(nextScreen);
            }
        }
        else {
            // no validation necessary, just navigate
            navigation.navigate(nextScreen);
        }
    };

    const renderBackButton = () => {
        if (prevScreen) {
            return (
                <BackButton navigation={navigation} prevScreen={prevScreen} />
            );
        }
    };

    const renderNextButton = () => {
        if (nextScreen) {
            return (
                <DinButton 
                    title="Next"
                    pressHandler={handleNextButtonPress} 
                />
            );
        }
    };

    const renderErrorMessages = () => {
        // extract error message from error object, if applicable
        const errorMessagesArray = Object.values(errors);
        (errorMessagesArray.length > 0) ? [[errorMessage]] = errorMessagesArray : errorMessage = '';
        return (
            <ErrorMessage
                style={styles.error}
                errorMessage={errorMessage}
            />
        );
    };

    let contentStyle = styles.contentView;
    let footerStyle = styles.footer;
    if (isReceiptScreen) {
        contentStyle = styles.receiptContentView;
        footerStyle = styles.receiptFooter;
    }

    return(
        <View style={SCREEN_STYLES.screenRoot}>
            <View style={styles.header}/>
            <View style={styles.backButtonView}>
                {renderBackButton()}
            </View>
            {!isReceiptScreen && renderErrorMessages()}
            <View style={contentStyle}>
                {children}
            </View>
            <View style={styles.nextButtonView}>
                {renderNextButton()}
            </View>
            <View style={footerStyle}/>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
    },
    backButtonView: {
        flex: 1,
        alignSelf: 'flex-start',
        marginLeft: 10,
    },
    error: {
        flex: 1,
        justifyContent: 'center'
    },
    contentView: {
        flex: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    receiptContentView: {
        flex: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    nextButtonView: {
        flex: 1,
        justifyContent: 'center',
    },
    footer: {
        flex: 7
    }, 
    receiptFooter: {
        flex: 0
    }
});

export default ContentContainer;
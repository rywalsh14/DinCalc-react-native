import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SCREEN_STYLES } from '../../styles/common';
import BackButton from './BackButton';
import DinButton from './DinButton';

const ContentContainer = ({ prevScreen, nextScreen, navigation, children, isReceiptScreen }) => {
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
                <DinButton title="Next" pressHandler={() => navigation.navigate(nextScreen)} />
            );
        }
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
        flex: 1
    },
    backButtonView: {
        flex: 1,
        alignSelf: 'flex-start',
        marginLeft: 10,
    },
    contentView: {
        flex: 6,
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
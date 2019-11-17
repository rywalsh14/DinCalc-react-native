import React from 'react';
import { Text } from 'react-native';
import ScreenContainer from '../components/utils/ScreenContainer';
import ContentContainer from '../components/utils/ContentContainer';

const ReceiptScreen = ({ navigation }) => {
    const prevScreen = 'SkierType';

    return (
        <ScreenContainer>
            <ContentContainer
                prevScreen={prevScreen}
                navigation={navigation}
            >
                <Text>Finished!</Text>
            </ContentContainer>
        </ScreenContainer>
    );
};

export default ReceiptScreen;
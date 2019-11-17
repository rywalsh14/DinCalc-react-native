import React from 'react';
import { Text } from 'react-native';
import ScreenContainer from '../components/utils/ScreenContainer';
import ContentContainer from '../components/utils/ContentContainer';

const ReceiptScreen = ({ height, weight, age, soleLength, skierType, navigation }) => {
    const prevScreen = 'SkierType';

    return (
        <ScreenContainer>
            <ContentContainer
                prevScreen={prevScreen}
                navigation={navigation}
            >
                <Text>Finished!</Text>
                <Text>{`Height: ${height.feet}'${height.inches}`}</Text>
                <Text>{`Weight: ${weight} lbs.`}</Text>
                <Text>{`Age: ${age} yrs.`}</Text>
                <Text>{`Sole Length: ${soleLength}`}</Text>
                <Text>{`Skier Type: ${skierType}`}</Text>
            </ContentContainer>
        </ScreenContainer>
    );
};

export default ReceiptScreen;
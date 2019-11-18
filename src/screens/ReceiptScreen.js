import React from 'react';
import ScreenContainer from '../components/utils/ScreenContainer';
import ContentContainer from '../components/utils/ContentContainer';
import calculateDin from '../non_react_js/DinCalculator';
import ReceiptDetails from '../components/details/ReceiptDetails';
import {Text} from 'react-native'


const ReceiptScreen = ({ height, weight, age, soleLength, skierType, navigation }) => {
    const prevScreen = 'SkierType';

    din = calculateDin(height, weight, age, soleLength, skierType);

    console.log(`din: ${din.rowLetter} - ${din.value}`);

    return (
        <ScreenContainer>
            <ContentContainer
                prevScreen={prevScreen}
                navigation={navigation}
                isReceiptScreen={true}
            >
                <ReceiptDetails
                    height={height}
                    weight={weight}
                    age={age}
                    soleLength={soleLength}
                    skierType={skierType}
                    din={din}
                />
            </ContentContainer>
        </ScreenContainer>
    );
};

export default ReceiptScreen;
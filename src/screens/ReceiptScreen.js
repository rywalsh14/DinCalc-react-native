import React from 'react';
import ScreenContainer from '../components/utils/ScreenContainer';
import ContentContainer from '../components/utils/ContentContainer';
import calculateDin from '../non_react_js/DinCalculator';
import ReceiptDetails from '../components/details/ReceiptDetails';

const ReceiptScreen = ({ height, weight, age, soleLength, skierType, navigation, dispatch }) => {
    const prevScreen = 'SkierType';
    const din = calculateDin(height, weight, age, soleLength, skierType);

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
                    dispatch={dispatch}
                    navigation={navigation}
                />
            </ContentContainer>
        </ScreenContainer>
    );
};

export default ReceiptScreen;
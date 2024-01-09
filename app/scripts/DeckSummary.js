import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { DeckSummaryStyles } from '../styles/deckStyles.js'


const DeckSummary = ({name, description, deckCardCount, deckProgress, deckProgressNum}) => {
    const navigation = useNavigation();

    const goToAllCardScreen = () => {
        navigation.navigate('AllCardScreen');
    }

    return (
        <TouchableOpacity style={DeckSummaryStyles.deckContainer} onPress={goToAllCardScreen}>
            <Text style={DeckSummaryStyles.deckTitle}>{name}</Text>
            <Text style={DeckSummaryStyles.deckDescription}>{description}</Text>
            <View style={DeckSummaryStyles.deckCardCountProgressContainer}>
                <Text style={DeckSummaryStyles.deckCardCount}>{deckCardCount}</Text>
                <Text style={DeckSummaryStyles.deckProgress}>{deckProgress}</Text>
            </View>
            <View>
                <View style={[DeckSummaryStyles.deckProgressBarBG]}>
                    <View style={[DeckSummaryStyles.deckProgressBar, { width: deckProgressNum }]} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default DeckSummary;
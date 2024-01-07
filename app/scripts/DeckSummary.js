import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

import { DeckSummaryStyles } from '../styles/deckStyles.js'

const DeckSummary = ({name, description, deckCardCount, deckProgress, deckProgressNum}) => {
    return (
        <View style={DeckSummaryStyles.deckContainer}>
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
        </View>
    );
};

export default DeckSummary;
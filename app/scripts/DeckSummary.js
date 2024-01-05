import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

import { DeckSummaryStyles } from '../styles/deckStyles.js'

const DeckSummary = ({name, description}) => {
    return (
        <View style={DeckSummaryStyles.deckContainer}>
            <Text style={DeckSummaryStyles.deckTitle}>{name}</Text>
            <Text style={DeckSummaryStyles.deckDescription}>{description}</Text>
            <View style={DeckSummaryStyles.deckCardCountProgressContainer}>
                <Text style={DeckSummaryStyles.deckCardCount}>20</Text>
                <Text style={DeckSummaryStyles.deckProgress}>20%</Text>
            </View>
            <View>
                <View style={DeckSummaryStyles.deckProgressBarBG}>
                    <View style={DeckSummaryStyles.deckProgressBar} />
                </View>
            </View>
        </View>
    );
};

export default DeckSummary;
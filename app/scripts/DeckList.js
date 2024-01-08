import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';

import DeckSummary from './DeckSummary';
import { DeckSummaryStyles } from '../styles/deckStyles.js'

const DeckList = ({decks}) => {
    return (
        <ScrollView>
            <View>
                {decks.slice(0, 2).map((deck, index) => (
                <DeckSummary key={index} {...deck} />
                ))}
            </View>
                {decks.length > 2 && (
                    <TouchableOpacity style={DeckSummaryStyles.showMoreButton}>
                        <Text style={DeckSummaryStyles.showMoreButtonText}>Show More</Text>
                    </TouchableOpacity>
                )}
        </ScrollView>
    );
};

export default DeckList;
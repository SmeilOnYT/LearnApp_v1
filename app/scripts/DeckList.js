import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';

import DeckSummary from './DeckSummary';
import { MainAppStyles } from '../styles/styles.js'

const DeckList = ({decks}) => {
    return (
        <ScrollView>
            <View style={MainAppStyles.deckListContainer}>
                {decks.slice(0, 2).map((deck, index) => (
                <DeckSummary key={index} {...deck} />
                ))}
            </View>
        </ScrollView>
    );
};
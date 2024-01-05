import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';

import DeckSummary from './DeckSummary';
import { MainAppStyles } from '../styles/styles.js'

const DeckList = ({decks}) => {
    return (
        <ScrollView>
            <View>
                {decks.slice(0, 2).map((deck, index) => (
                <DeckSummary key={index} {...deck} />
                ))}
            </View>
                {decks.length > 2 && (
                    <TouchableOpacity>
                        <Text>Show More</Text>
                    </TouchableOpacity>
                )}
        </ScrollView>
    );
};

export default DeckList;
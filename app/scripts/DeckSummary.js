import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { MainAppStyles } from '../styles/styles.js'

const DeckSummary = ({name, description}) => {
    return (
        <View style={MainAppStyles.deckContainer}>
            <Text>{name}</Text>
            <Text>{description}</Text>
        </View>
    );
};
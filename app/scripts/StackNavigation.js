import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CardScreen from '../screens/CardScreen.js';
import DefineDeckScreen from '../screens/DefineDeckScreen.js';
import DeckInfoScreen from '../screens/DeckInfoScreen.js';

const Stack = createStackNavigator();

/*
screenOptions={{
            animationEnabled: false,
            }}
*/

const StackNavigation = () => {
    return (
        <Stack.Navigator
        
        >
            <Stack.Screen 
                name='CardScreen' 
                component={CardScreen} 
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name='AllCardScreen' 
                component={DeckInfoScreen} 
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
};

export default StackNavigation;
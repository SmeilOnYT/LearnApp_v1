import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CardScreen from '../screens/CardScreen.js';
import AllCardScreen from '../screens/AllCardScreen.js';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='CardScreen' 
                component={CardScreen} 
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name='AllCardScreen' 
                component={AllCardScreen} 
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
};

export default StackNavigation;
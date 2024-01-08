import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CardScreen from '../screens/CardScreen';
import AllCardScreen from '../screens/AllCardScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='CardScreen' component={CardScreen} />
            <Stack.Screen name='AllCardScreen' component={AllCardScreen} />
        </Stack.Navigator>
    )
};

export default StackNavigation;
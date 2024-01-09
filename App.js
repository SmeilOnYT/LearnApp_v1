import React, { useCallback, useEffect, useState } from 'react';
//import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font'

import HomeScreen from './app/screens/HomeScreenV2';
import CardScreen from './app/screens/CardScreen';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './app/scripts/StackNavigation';


export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'Poppins-Light': require("./app/assets/fonts/Poppins-Light.ttf"),
          'Poppins-LightItalic': require("./app/assets/fonts/Poppins-LightItalic.ttf"),
          'Poppins-Regular': require("./app/assets/fonts/Poppins-Regular.ttf"),
          'Poppins-SemiBold': require("./app/assets/fonts/Poppins-SemiBold.ttf"),
        });
      } catch (e) {
        console.warn(e);
        console.error("Error loading fonts: ", error)
      } finally {
        // Tell the application to render
        setAppIsReady(true); 
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
      
  );
}


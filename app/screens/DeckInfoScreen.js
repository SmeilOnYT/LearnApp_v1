import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions, 
  StatusBar,
} from "react-native";
import { MainAppStyles } from "../styles/styles.js";
import { useNavigation, useRoute } from "@react-navigation/native";

import { mainStyles } from "../styles/mainStyles.js";

function DeckInfoScreen({ deck }) {
  const navigation = useNavigation();
  const route = useRoute();

  const goBack = () => {
    navigation.navigate("CardScreen");
  };

  const calcScrollViewHeight = () => {
    const screenHeight = Dimensions.get('window').height;
      const statusBarHeight = StatusBar.currentHeight || 0;
      const navWindowHeight = 60;
      const excludedHeight = statusBarHeight + navWindowHeight + 160;

      return screenHeight - excludedHeight;
  }

  return (
    <View style={mainStyles.screen}>
      <SafeAreaView style={mainStyles.container}>
        <View style={mainStyles.nav_window}>
          <TouchableOpacity onPress={goBack}>
            <Image
              source={require("../assets/Back_white_v1-01.png")}
              style={MainAppStyles.backButton}
            ></Image>
          </TouchableOpacity>
        </View>
        <ScrollView style={[mainStyles.scroll_window, { maxHeight: calcScrollViewHeight(),}]}>
            <Text>Test</Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default DeckInfoScreen;

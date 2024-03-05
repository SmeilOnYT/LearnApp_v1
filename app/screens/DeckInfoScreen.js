import React from "react";
import {
  SafeAreaView,
  View,
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

import Circular_Progress_Bar from "../scripts/Circular_Progress_Bar.js";
import Deck_To_Dos from "../scripts/Deck_To_Dos.js";

import { NAV_WINDOW_HEIGHT } from "../scripts/AppValues";
import { NAV_WINDOW_MARGIN_TOP } from "../scripts/AppValues";

function DeckInfoScreen({ deck }) {
  const navigation = useNavigation();
  const route = useRoute();

  const goBack = () => {
    navigation.navigate("CardScreen");
  };

  const calcScrollViewHeight = () => {
    const screenHeight = Dimensions.get("window").height;
    const statusBarHeight = StatusBar.currentHeight || 0;
    const excludedHeight =
      statusBarHeight + NAV_WINDOW_HEIGHT + NAV_WINDOW_MARGIN_TOP + 160;

    return screenHeight - excludedHeight;
  };

  const todoItems = ["Repeat Flashcards", "+20 Flashcards"];

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
        <ScrollView
          style={[
            mainStyles.scroll_window,
            { maxHeight: calcScrollViewHeight() },
          ]}
        >
          <View style={mainStyles.statistic_summary_container}>
            <Circular_Progress_Bar progress={50} radius={50} strokeWidth={10} />
            <View style={mainStyles.statistic_summary_text_container}>
              <Text style={mainStyles.statistic_text_style}>
                <Text style={mainStyles.statistic_text_marked_style}>50%</Text>{" "}
                Completion
              </Text>
              <Text style={mainStyles.statistic_text_style}>
                <Text style={mainStyles.statistic_text_marked_style}>210</Text>{" "}
                Total Reviews
              </Text>
              <Text style={mainStyles.statistic_text_style}>
                <Text style={mainStyles.statistic_text_marked_style}>46</Text>{" "}
                Minutes Learned
              </Text>
            </View>
          </View>
          <TouchableOpacity style={mainStyles.see_all_statistics_button}>
            <Text style={mainStyles.see_all_statistics_button_text}>
              See Statistics
            </Text>
          </TouchableOpacity>
          <View style={mainStyles.content_divider}></View>

          <Text style={mainStyles.h2_heading}>To Do's</Text>
          <Deck_To_Dos items={todoItems} />

          <View style={mainStyles.content_divider}></View>

          <Text style={mainStyles.h1_heading}>Spanish</Text>
          <View style={mainStyles.small_info_deck_container}>
            <Image
              source={require("../assets/Back_white_v1-01.png")}
              style={mainStyles.small_info_user_icon}
            ></Image>
            <Text style={mainStyles.small_info_text}>User_123</Text>
            <View style={mainStyles.small_info_divider}></View>
            <Text style={mainStyles.small_info_text}>34 Cards</Text>
          </View>
          <View style={mainStyles.deck_modify_button_container}>
            <TouchableOpacity
              style={[mainStyles.deck_modify_button, { marginRight: 5 }]}
            >
              <Text style={mainStyles.deck_learn_modify_button_text}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[mainStyles.deck_modify_button, { marginLeft: 5 }]}
            >
              <Text style={mainStyles.deck_learn_modify_button_text}>Edit</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={mainStyles.deck_learn_button}>
            <Text style={mainStyles.deck_learn_modify_button_text}>Anki</Text>
          </TouchableOpacity>
          <TouchableOpacity style={mainStyles.deck_learn_button}>
            <Text style={mainStyles.deck_learn_modify_button_text}>
              Spaced Repetition
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={mainStyles.deck_learn_button}>
            <Text style={mainStyles.deck_learn_modify_button_text}>
              Classic Flashcards
            </Text>
          </TouchableOpacity>
          <View style={mainStyles.content_divider}></View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default DeckInfoScreen;

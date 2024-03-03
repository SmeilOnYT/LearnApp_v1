import React from "react";
import {
  SafeAreaView,
  TouchableHighlight,
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MainAppStyles } from "../styles/styles.js";
import { useNavigation, useRoute } from "@react-navigation/native";

import TopMenu from "./TopMenuDisplay.js";
import BottomMenu from "./BottomMenuDisplay.js";

function DefineDeckScreen({ deck }) {
  const navigation = useNavigation();
  const route = useRoute();

  const goBack = () => {
    navigation.navigate("CardScreen");
  };

  return (
    <View style={MainAppStyles.screen}>
      <View style={MainAppStyles.contentWindowWithoutHeader}>
        <TouchableOpacity onPress={goBack}>
          <Image
            source={require("../assets/Back_white_v1-01.png")}
            style={MainAppStyles.backButton}
          ></Image>
        </TouchableOpacity>
      </View>

      <View style={MainAppStyles.scrollViewContainer}>
        <ScrollView
          contentContainerStyle={MainAppStyles.contentWindowWithoutBack}
        >
          <View style={MainAppStyles.statisticSummary}>
            <Image
              source={require("../assets/Back_white_v1-01.png")}
              style={MainAppStyles.backButton}
            ></Image>
            
            <View style={MainAppStyles.statisticsContainer}>
              <Text style={MainAppStyles.statisticWordStyle}>
                <Text style={MainAppStyles.statisticRedPreviewNumStyle}>
                  50%
                </Text>{" "}
                Completion
              </Text>
              <Text style={MainAppStyles.statisticWordStyle}>
                <Text style={MainAppStyles.statisticRedPreviewNumStyle}>
                  210
                </Text>{" "}
                Total Reviews
              </Text>
              <Text style={MainAppStyles.statisticWordStyle}>
                <Text style={MainAppStyles.statisticRedPreviewNumStyle}>
                  46
                </Text>{" "}
                Minutes Learned
              </Text>
            </View>
          </View>
          <TouchableOpacity style={MainAppStyles.seeAllStatisticsButton}>
            <Text style={MainAppStyles.seeAllStatisticsButtonText}>
              See Statistics
            </Text>
          </TouchableOpacity>

          <View style={MainAppStyles.contentDivider}></View>
        </ScrollView>
      </View>
    </View>
  );
}

export default DefineDeckScreen;

import React from "react";
import { View, Text, StyleSheet } from 'react-native';


const Deck_To_Dos = ({ items }) => {
    return (
        <View style={styles.container}>
          {items.map((item, index) => (
            <View key={index} style={styles.item}>
              <View style={styles.red_check_circle}></View>
              <Text style={styles.to_do_text}>{item}</Text>
            </View>
          ))}
        </View>
      );
    };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10,
    },
    item: {
      flexDirection: "row",
      marginVertical: 5,
      alignItems: "center",
    },
    red_check_circle:{
        width: 15,
        height: 15,
        backgroundColor: "#ED464A",
        borderRadius: 10,
        marginRight: 10,
    },
    to_do_text:{
        color: "#ffffff",
        fontFamily: "Poppins-Regular",
        fontSize: 16,
    },
  });

  export default Deck_To_Dos;
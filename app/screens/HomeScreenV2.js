import React from 'react';
import { SafeAreaView, TouchableHighlight } from 'react-native';
import { View, StyleSheet, Text, Image } from 'react-native';

var MenuName = "Home V2";
const MenuStrokeWidth = 2;
const MenuBorderRadius = 35;
const BaseBackgroundColor = "#232323";
const MenuBackgroundColor = "#535353";
const MenuBackgroundStrokeColor = "#838383";

function HomeScreen(props) {
    return (
    <View style={styles.screen}>
        <View style={styles.topMenu}>
            <SafeAreaView style={styles.topMenuItemContainer}>
                <View style={styles.topMenuDataContainer}>
                    <View style={[styles.topMenuDataContainer, styles.topMenuSingleDataContainer]}>

                        <Image source={require("../assets/Streak_white_v1-01.png")} style={styles.topMenuDataIcon}/>
                        <Text style={styles.BasicText}>25</Text>

                    </View>
                    <View style={styles.topMenuDataContainer}>

                        <Image source={require("../assets/Icon_Clock_small_white_v1-01.png")} style={styles.topMenuDataIcon}/>
                        <Text style={styles.BasicText}>345</Text>

                    </View>
                </View>
                
                <Image source={require("../assets/Icon_Account_v2-01.png")} style={styles.topMenuProfile}/>

            </SafeAreaView>
        </View>
        <View style={styles.bottomMenu}>
            <SafeAreaView style={styles.bottomMenuItemContainer}>

                <Image source={require("../assets/Icon_Learn_white_v1-01.png")} style={styles.bottomMenuDataIcon}/>
                <Image source={require("../assets/Icon_Habit_white_v1-01.png")} style={styles.bottomMenuDataIcon}/>
                <Image source={require("../assets/Icon_Home_white_outlines_v1-01.png")} style={styles.bottomMenuDataIcon}/>
                <Image source={require("../assets/Icon_Calendar_white_v1-01.png")} style={styles.bottomMenuDataIcon}/>
                <Image source={require("../assets/Icon_Clock_white_v1-01.png")} style={styles.bottomMenuDataIcon}/>

            </SafeAreaView>
        </View>
    </View>
    );
}


const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: BaseBackgroundColor,
    },
    topMenu:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 125,
        backgroundColor: MenuBackgroundColor,
        borderRadius: MenuBorderRadius,
        borderWidth: MenuStrokeWidth,
        borderColor: MenuBackgroundStrokeColor,
        marginTop: -MenuStrokeWidth,
        paddingHorizontal: 20,
        paddingBottom: 30,
        paddingTop: 30,
  
    },
    topMenuItemContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    topMenuProfile:{
        width: 50,
        height: 50,
    },
    topMenuDataContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    topMenuSingleDataContainer:{
        marginRight: 25,
    },
    topMenuDataIcon:{
        width: 30,
        height: 30,
        marginRight: 5,
    },
    BasicText:{
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 18,
    },

    bottomMenu:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 100,
        backgroundColor: MenuBackgroundColor,
        borderRadius: MenuBorderRadius,
        borderWidth: MenuStrokeWidth,
        borderColor: MenuBackgroundStrokeColor,
        marginBottom: -MenuStrokeWidth,
        paddingHorizontal: 20,
        paddingBottom: 30,
        paddingTop: 30,
    },
    bottomMenuItemContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginHorizontal: 10,
    },
    bottomMenuDataIcon:{
        width: 35,
        height: 35,
        marginTop: -8,
    },

});


export default HomeScreen;
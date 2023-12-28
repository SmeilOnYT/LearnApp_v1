import React from 'react';
import { SafeAreaView, TouchableHighlight, View, StyleSheet, Text, Image } from 'react-native';

import { MainAppStyles } from '../styles/styles.js'

function CardScreen(){
    return (
        <View style={MainAppStyles.screen}>
            <View style={MainAppStyles.topMenu}>
                <SafeAreaView style={MainAppStyles.topMenuItemContainer}>
                    <View style={MainAppStyles.topMenuDataContainer}>
                        <View style={[MainAppStyles.topMenuDataContainer, MainAppStyles.topMenuSingleDataContainer]}>
    
                            <Image source={require("../assets/Streak_white_v1-01.png")} style={MainAppStyles.topMenuDataIcon}/>
                            <Text style={MainAppStyles.BasicText}>25</Text>
    
                        </View>
                        <View style={MainAppStyles.topMenuDataContainer}>
    
                            <Image source={require("../assets/Icon_Clock_small_white_v1-01.png")} style={MainAppStyles.topMenuDataIcon}/>
                            <Text style={MainAppStyles.BasicText}>345</Text>
    
                        </View>
                    </View>
                    
                    <Image source={require("../assets/Icon_Account_v2-01.png")} style={MainAppStyles.topMenuProfile}/>
    
                </SafeAreaView>
            </View>

            <View>
                <Text style={MainAppStyles.screenHeader}>Decks</Text>
            </View>

            <View style={MainAppStyles.bottomMenu}>
                <SafeAreaView style={MainAppStyles.bottomMenuItemContainer}>
    
                    <Image source={require("../assets/Icon_Learn_white_v1-01.png")} style={MainAppStyles.bottomMenuDataIcon}/>
                    <Image source={require("../assets/Icon_Habit_white_v1-01.png")} style={MainAppStyles.bottomMenuDataIcon}/>
                    <Image source={require("../assets/Icon_Home_white_outlines_v1-01.png")} style={MainAppStyles.bottomMenuDataIcon}/>
                    <Image source={require("../assets/Icon_Calendar_white_v1-01.png")} style={MainAppStyles.bottomMenuDataIcon}/>
                    <Image source={require("../assets/Icon_Clock_white_v1-01.png")} style={MainAppStyles.bottomMenuDataIcon}/>
    
                </SafeAreaView>
            </View>
        </View>
        );
}

export default CardScreen;
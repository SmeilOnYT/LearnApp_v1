import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';

import { MainAppStyles } from '../styles/styles.js'

function BottomMenuDisplay(){
    return(
        <View style={MainAppStyles.bottomMenu}>
                <SafeAreaView style={MainAppStyles.bottomMenuItemContainer}>
    
                    <Image source={require("../assets/Icon_Learn_white_selected_v1-01.png")} style={MainAppStyles.bottomMenuDataIcon}/>
                    <Image source={require("../assets/Icon_Habit_white_v1-01.png")} style={MainAppStyles.bottomMenuDataIcon}/>
                    <Image source={require("../assets/Icon_Home_white_outlines_v1-01.png")} style={MainAppStyles.bottomMenuDataIcon}/>
                    <Image source={require("../assets/Icon_Calendar_white_v1-01.png")} style={MainAppStyles.bottomMenuDataIcon}/>
                    <Image source={require("../assets/Icon_Clock_white_v1-01.png")} style={MainAppStyles.bottomMenuDataIcon}/>
    
                </SafeAreaView>
        </View>
    )
}

export default BottomMenuDisplay;
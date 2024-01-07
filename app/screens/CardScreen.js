import React from 'react';
import { SafeAreaView, TouchableHighlight, View, StyleSheet, Text, Image } from 'react-native';

import { MainAppStyles } from '../styles/styles.js'
import DecksList from "../scripts/DeckList.js"

/*
    All of the variables will be removed later on and everything will be stored inside the Array.
*/

//
let decks = [
    { 
        name: "Deck 1", 
        description: "Description 1", 
        deckCardCount: 0, 
        deckRightCardCount: 0,
        deckProgress: null, 
        deckProgressNum: null,
    },
    { 
        name: "Deck 2", 
        description: "Description 2", 
        deckCardCount: 0, 
        deckRightCardCount: 0,
        deckProgress: "0%", 
        deckProgressNum: null,
    },
];

function DeckProgressBar(CardCount, RightCount){
    let percentage = RightCount/CardCount;
    if(percentage >= 0.05)
        return percentage * 311;
    else 
        return 12;
}

function DeckProgressPercentage(CardCount, RightCount){
    percentage = RightCount/CardCount;
    if(percentage > 1){
        return "100%";
        console.warn("Deck Percentage Overflow");
    }
    else if (percentage < 0){
        return "0%";
        console.warn("Deck Percentage below 0");
    }
    else return `${Math.round(percentage*100)}%`;
        
}

function LoadDeckProgress(SavedDeckArray){
    //Load Deck Array if not empty
    if(SavedDeckArray != null){
        //Load All Deck Array Data
        for(i = 0; i < SavedDeckArray.length; i++){
            decks[i].name = SavedDeckArray[i].name;
            decks[i].description = SavedDeckArray[i].description;
            decks[i].deckCardCount = SavedDeckArray[i].deckCardCount;
            decks[i].deckRightCardCount = SavedDeckArray[i].deckRightCardCount;
        }

        for(i = 0; i < decks.length; i++){
            decks[i].deckProgress = DeckProgressPercentage(decks[i].deckCardCount, decks[i].deckRightCardCount);
            decks[i].deckProgressNum = DeckProgressBar(decks[i].deckCardCount, decks[i].deckRightCardCount);
        }
    }
    else if (SavedDeckArray = null){
        console.warn("No Decks Found");
    }  
}

function UpdateDeckProgress(Decks){

}

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

            <View style={MainAppStyles.contentWindow}>
                <DecksList decks = {decks} />
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
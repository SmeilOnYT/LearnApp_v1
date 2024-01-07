import React from 'react';
import { SafeAreaView, TouchableHighlight, View, StyleSheet, Text, Image } from 'react-native';

import { MainAppStyles } from '../styles/styles.js'
import DecksList from "../scripts/DeckList.js"

/*
    All of the variables will be removed later on and everything will be stored inside the Array.
*/
//Deck 1 Info
const deck1CardCount = 20;
const deck1RightCount = 10;

//Deck 2 Info
const deck2CardCount = 0;

//Deck 3 Info
const deck3CardCount = 0;

//
let decks = [
    { 
        name: "Deck 1", 
        description: "Description 1", 
        deckCardCount: deck1CardCount, 
        deckRightCardCount: 0,
        deckProgress: DeckProgressPercentage(10, deck1RightCount), 
        deckProgressNum: DeckProgressBar(10, deck1RightCount)
    },
    { 
        name: "Deck 2", 
        description: "Description 2", 
        deckCardCount: deck2CardCount, 
        deckRightCardCount: 0,
        deckProgress: "0%", 
        deckProgressNum: DeckProgressBar(deck1CardCount, deck1RightCount)},
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
    if(SavedDeckArray != null){
        for(i = 0; i < SavedDeckArray.length; i++){
            decks[0].name = SavedDeckArray[0].name;
            decks[0].description = SavedDeckArray[0].description;
            decks[0].deckCardCount = SavedDeckArray[0].deckCardCount;
            decks[0].deckProgress = SavedDeckArray[0].deckProgress;
            decks[0].deckProgressNum = SavedDeckArray[0].deckProgressNum;
        }
    }
    else if (SavedDeckArray = null){
        console.warn("No Decks Found");
    }
    
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
import React from 'react';
import { SafeAreaView, View, Text, Image, ScrollView } from 'react-native';

import { MainAppStyles } from '../styles/styles.js'
import DecksList from "../scripts/DeckList.js"
import TopMenu from '../screens/TopMenuDisplay.js'
import BottomMenu from '../screens/BottomMenuDisplay.js'

/*
    All of the variables will be removed later on and everything will be stored inside the Array.
*/
let decks = [
    { 
        name: "Deck 1", 
        description: "Description 1", 
        deckCardCount: 20, 
        deckRightCardCount: 10,
        deckProgress: DeckProgressPercentage(20, 10), 
        deckProgressNum: DeckProgressBar(20, 10),
    },
    { 
        name: "Deck 2", 
        description: "Description 2", 
        deckCardCount: 0, 
        deckRightCardCount: 0,
        deckProgress: DeckProgressPercentage(null, null), 
        deckProgressNum: DeckProgressBar(null, null),
    },
    { 
        name: "Deck 3", 
        description: "Description 3", 
        deckCardCount: 0, 
        deckRightCardCount: 0,
        deckProgress: DeckProgressPercentage(null, null), 
        deckProgressNum: DeckProgressBar(null, null),
    },
];

function DeckProgressBar(CardCount, RightCount){
    let percentage = RightCount/CardCount;
    if(percentage >= 0.05)
        return percentage *  311; //Value by Design
    else 
        return 12; //Value by Design
}

function DeckProgressPercentage(CardCount, RightCount){
    percentage = RightCount/CardCount;
    if(percentage > 1){
        return "100%";
        console.warn("Deck Percentage Overflow");
    }
    else if (percentage < 0 | CardCount == null | RightCount == null){
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

        UpdateDeckProgress(decks);
    }
    else if (SavedDeckArray = null){
        console.warn("No Decks Found");
    }  
}

function UpdateDeckProgress(decks){
    for(i = 0; i < decks.length; i++){
        decks[i].deckProgress = DeckProgressPercentage(decks[i].deckCardCount, decks[i].deckRightCardCount);
        decks[i].deckProgressNum = DeckProgressBar(decks[i].deckCardCount, decks[i].deckRightCardCount);
    }
}
/*
            <ScrollView style={MainAppStyles.contentWindow}>
                <Text style={MainAppStyles.pageHeader}>Decks</Text>
                <DecksList decks = {decks} />
                <Text style={[MainAppStyles.pageHeader, {paddingTop: 25}]}>Learn</Text>
            </ScrollView>
*/

function CardScreen(){
    return (
        <View style={MainAppStyles.screen}>

            <ScrollView style={MainAppStyles.contentWindow}>
                <Text style={MainAppStyles.pageHeader}>Decks</Text>
                <DecksList decks = {decks} />
                <Text style={[MainAppStyles.pageHeader, {paddingTop: 25}]}>Learn</Text>
            </ScrollView>
            
        </View> 
            
        );
}

export default CardScreen;
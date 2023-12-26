import React from 'react';
import { SafeAreaView, TouchableHighlight } from 'react-native';
import { View, StyleSheet, Text, Image } from 'react-native';

var MenuName = "Home";

function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.scene}>
            <View style={styles.menuBackground}>
                <SafeAreaView style={styles.menuSingleIcon}>
                    <TouchableHighlight onPress={() => console.log("Learn")}>
                        <Image source={require("../assets/learn-svgrepo-com.svg")} style={styles.menuIcons}/>
                    </TouchableHighlight>
                    <Text>Learn</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.menuSingleIcon}>
                <TouchableHighlight onPress={() => console.log("Cards")}>
                        <Image source={require("../assets/icon.png")} style={styles.menuIcons}/>
                    </TouchableHighlight>
                    <Text>Cards</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.menuSingleIcon}>
                    <TouchableHighlight onPress={() => console.log("Home")}>
                        <Image source={require("../assets/icon.png")} style={styles.menuIcons}/>
                    </TouchableHighlight>
                    <Text>HOME</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.menuSingleIcon}>
                    <TouchableHighlight onPress={() => console.log("Calendar")}>
                        <Image source={require("../assets/icon.png")} style={styles.menuIcons}/>
                    </TouchableHighlight>
                    <Text>Calendar</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.menuSingleIcon}>
                    <TouchableHighlight onPress={() => console.log("Time")}>
                        <Image source={require("../assets/icon.png")} style={styles.menuIcons}/>
                    </TouchableHighlight>
                    <Text>Time</Text>
                </SafeAreaView>
            </View>
        </View>
            <SafeAreaView style={styles.mainContentView}>
                <View>
                    <Text style={styles.headerStyle}>Calendar</Text>
                    <View style={styles.calendarContent}>
                    </View>
                </View>
            </SafeAreaView>
            
        </View>
        

        
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scene:{
        backgroundColor: "#fff",
        justifyContent: 'flex-end',
        flex: 1,
    },
    menuBackground:{
        backgroundColor: "gray",
        width: "100%",
        height: 100,
        flexDirection: 'row', // Horizontal layout
        justifyContent: 'space-evenly', // Evenly space items,
    },
    menuIcons:{
        width: 50,
        height: 50,
    },
    menuSingleIcon:{
        top: 10,
        alignItems: "center",
    },
    InfoText:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 200,
    },
    headerStyle:{
        fontSize: 25,
        fontWeight: "bold",
        paddingBottom: 10,
    },
    mainContentView:{
        position: 'absolute',
        top: 0,
        left: 25,
        flex: 1,
        width: "100%",
    },
    calendarContent:{
        height: 200,
        width: 400,
        backgroundColor: "lightgray",
        borderRadius: 10,
        paddingHorizontal: 30,
    }
})

export default HomeScreen;
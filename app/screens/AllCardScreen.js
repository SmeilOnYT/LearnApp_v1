import React from 'react';
import { SafeAreaView, TouchableHighlight, View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { MainAppStyles } from '../styles/styles.js'
import { useNavigation } from '@react-navigation/native';

function AllCardScreen(){
    const navigation = useNavigation();

    const goBack = () => {
        navigation.navigate('CardScreen');
    }

    return(
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

            <ScrollView style={MainAppStyles.contentWindow}>
                <Text style={MainAppStyles.pageHeader} onPress={goBack}>Back</Text>
            </ScrollView>

        </View>
    );
}

export default AllCardScreen;
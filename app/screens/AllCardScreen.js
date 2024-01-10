import React from 'react';
import { SafeAreaView, TouchableHighlight, View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { MainAppStyles } from '../styles/styles.js'
import { useNavigation } from '@react-navigation/native';
import Menu from '../screens/TopMenuDisplay.js'

function AllCardScreen(){
    const navigation = useNavigation();

    const goBack = () => {
        navigation.navigate('CardScreen');
    }

    return(
        <View>
            <Menu />
            <ScrollView style={MainAppStyles.contentWindow}>
                <Text style={MainAppStyles.pageHeader} onPress={goBack}>Back</Text>
            </ScrollView>
        </View>
        
        
    );
}

export default AllCardScreen;
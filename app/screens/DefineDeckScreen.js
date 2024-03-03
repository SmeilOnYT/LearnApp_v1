import React from 'react';
import { SafeAreaView, TouchableHighlight, View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { MainAppStyles } from '../styles/styles.js'
import { useNavigation, useRoute } from '@react-navigation/native';

import TopMenu from './TopMenuDisplay.js'
import BottomMenu from './BottomMenuDisplay.js'

function DefineDeckScreen({deck}){
    const navigation = useNavigation();
    const route = useRoute();

    const goBack = () => {
        navigation.navigate('CardScreen');
    }

    return(
        <View style={MainAppStyles.screen}>
            <ScrollView style={MainAppStyles.contentWindow}>
                <Text style={MainAppStyles.pageHeader} onPress={goBack}>Back</Text>
                <Text></Text>
            </ScrollView>
        </View>
        
        
    );
}

export default DefineDeckScreen;
import { StyleSheet } from 'react-native';

const MainBackgroundColor = "#20242A";

export const mainStyles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: MainBackgroundColor,
    },
    container:{
        backgroundColor: "#ffffff",
        marginHorizontal: 30,
        flex: 1,
    },
    nav_window:{
        backgroundColor: "#ff0000",
        height: 60,
    },
    scroll_window:{
        backgroundColor: "#00ff00",
        flex: 1,
    }

});
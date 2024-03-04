import { StyleSheet } from 'react-native';

import { NAV_WINDOW_HEIGHT } from '../scripts/AppValues';
import { NAV_WINDOW_MARGIN_TOP } from '../scripts/AppValues';

const MainBackgroundColor = "#20242A";

export const mainStyles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: MainBackgroundColor,
    },
    container:{
        marginHorizontal: 30,
        flex: 1,

    },
    nav_window:{
        height: NAV_WINDOW_HEIGHT,
        marginTop: NAV_WINDOW_MARGIN_TOP,
    },
    scroll_window:{
        flex: 1,
        /*backgroundColor: "#999999",*/
    }

});
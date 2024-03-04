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
    },
    content_divider:{
        height: 2,
        backgroundColor: "#3C4148",
        borderRadius: 10,
        marginVertical: 20,
    },
    h1_heading:{
        fontFamily: "Poppins-SemiBold",
        fontSize: 25,
        color: "#ffffff",
    },
    h2_heading:{
        fontFamily: "Poppins-SemiBold",
        fontSize: 22,
        color: "#ffffff",
    },

    /* DeckInfoScreen - styles */
    statistic_summary_container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    statistic_summary_text_container:{
        flex: 1,
        marginLeft: 20,
    },
    statistic_text_style:{
        color: "#ffffff",
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        marginVertical: 4,
    },
    statistic_text_marked_style:{
        color: "#ED464A",
        fontFamily: "Poppins-SemiBold"
    },
    see_all_statistics_button:{
        marginTop: 20,
        backgroundColor: "#50545B",
        width: 200,
        alignItems: "center",
        borderRadius: 10,
    },
    see_all_statistics_button_text:{
        fontFamily: 'Poppins-LightItalic',
        color: "#ffffff",
        fontSize: 16,
        margin: 8,
    },


});
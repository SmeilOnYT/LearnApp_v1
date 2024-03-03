import { StyleSheet } from 'react-native';

const MenuStrokeWidth = 2;
const MenuBorderRadius = 35;
const BaseBackgroundColor = "#20242A";
const MenuBackgroundColor = "#535353";
const MenuBackgroundStrokeColor = "#838383";

const MenuPushUpward = 30;

export const MainAppStyles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: "left",
        alignItems: "left",
        backgroundColor: BaseBackgroundColor,
    },
    topMenu:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 125,
        marginTop: 40,
        paddingHorizontal: 20,
        paddingBottom: 30,
        paddingTop: 30,
    },
    topMenuItemContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    topMenuDataContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    topMenuSingleDataContainer:{
        marginRight: 25,
    },
    topMenuDataIcon:{
        width: 30,
        height: 30,
        marginRight: 5,
    },
    BasicText:{
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 18,
        fontFamily: "Poppins-SemiBold",
    },

    bottomMenu:{
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        height: 65,
        backgroundColor: "#3C4148",
        borderRadius: 25,
        paddingHorizontal: 20,
        justifyContent: "center"
    },
    bottomMenuItemContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginHorizontal: 10,
    },
    bottomMenuDataIcon:{
        width: 30,
        height: 30,
    },
    pageSelectorBeam:{
        width: 40,
        height: 5,
        backgroundColor: "#ED464A",
        borderRadius: 10,
        position: 'absolute',
        bottom: 0,
        left: 25,
    },






    scrollViewContainer:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 30, // Adjust left padding
        right: 30,
    },


    contentWindow:{
        top: 150,
        left: 30,
        right: 30,
        bottom: 100,
    },
    contentWindowWithoutHeader:{
        top: 75,
        left: 30,
        right: 30,
        bottom: 100,
    },
    contentWindowWithoutBack:{
        top: 100,
        bottom: 100,
        justifyContent: 'center',
    },
    screenHeader:{
        top: 0,
        left: 0,
        color: "#ffffff",
        fontSize: 20,
        fontWeight: 900,
    },
    pageHeader:{
        fontFamily: "Poppins-SemiBold",
        color: "#ffffff",
        fontSize: 30,
    },
    profileBG:{
        width: 50,
        height: 50,
        backgroundColor: "#3C4148",
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: "center",
    },

    titleDivider:{
        height: 3,
        width: 70,
        backgroundColor: "#ED464A",
        borderRadius: 10,
        marginTop: 8,
        marginBottom: 15,
    },

    backButton:{
        height: 40,
        width: 40,
        marginLeft: -6,
    },



    statisticsContainer: {
        flex: 1, // Fill available space horizontally
        paddingLeft: 30,
        paddingRight: 30,
    },



    /*------------------------*/
    /* Muss noch in separate Datei getan werden */

    statisticRedPreviewNumStyle:{
        color: "#ED464A",
        fontFamily: "Poppins-SemiBold"
    },

    statisticWordStyle:{
        color: "#ffffff",
        fontFamily: "Poppins-Regular",
        fontSize: 18,
        marginVertical: 4,
    },
    statisticSummary:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    seeAllStatisticsButton:{
        marginTop: 20,
        backgroundColor: "#50545B",
        width: 200,
        alignItems: "center",
        borderRadius: 10,
    },
    seeAllStatisticsButtonText:{
        fontFamily: 'Poppins-LightItalic',
        color: "#ffffff",
        fontSize: 16,
        margin: 8,
        
    },
    contentDivider:{
        height: 2,
        backgroundColor: "#3C4148",
        borderRadius: 10,
        marginVertical: 20,
    },
})
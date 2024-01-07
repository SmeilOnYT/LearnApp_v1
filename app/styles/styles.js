import { StyleSheet } from 'react-native';

const MenuStrokeWidth = 2;
const MenuBorderRadius = 35;
const BaseBackgroundColor = "#232323";
const MenuBackgroundColor = "#535353";
const MenuBackgroundStrokeColor = "#838383";

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
        backgroundColor: MenuBackgroundColor,
        borderRadius: MenuBorderRadius,
        borderWidth: MenuStrokeWidth,
        borderColor: MenuBackgroundStrokeColor,
        marginTop: -MenuStrokeWidth,
        paddingHorizontal: 20,
        paddingBottom: 30,
        paddingTop: 30,
  
    },
    topMenuItemContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    topMenuProfile:{
        width: 50,
        height: 50,
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
        bottom: 0,
        left: 0,
        right: 0,
        height: 100,
        backgroundColor: MenuBackgroundColor,
        borderRadius: MenuBorderRadius,
        borderWidth: MenuStrokeWidth,
        borderColor: MenuBackgroundStrokeColor,
        marginBottom: -MenuStrokeWidth,
        paddingHorizontal: 20,
        paddingBottom: 30,
        paddingTop: 30,
    },
    bottomMenuItemContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginHorizontal: 10,
    },
    bottomMenuDataIcon:{
        width: 35,
        height: 35,
        marginTop: -8,
    },

    contentWindow:{
        top: 150,
        left: 30,
        right: 30,
        bottom: 100,
    },
    screenHeader:{
        top: 0,
        left: 0,
        color: "#ffffff",
        fontSize: 20,
        fontWeight: 900,
    },
})
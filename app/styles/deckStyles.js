import { StyleSheet } from "react-native";

const ContentBackgroundColor = "#50545B"

export const DeckSummaryStyles = StyleSheet.create({
    deckContainer:{
        top: 0,
        width: 335,
        height: 115,
        backgroundColor: ContentBackgroundColor,
        borderRadius: 15,
        paddingTop: 10,
        paddingLeft: 12,
        marginBottom: 15,
    },
    deckTitle:{
        color: "#ffffff",
        fontSize: 18,
        marginBottom: 3,

        fontFamily: "Poppins-SemiBold",
    },
    deckDescription:{
        color: "#ffffff",
        fontSize: 14,
        marginBottom: 8,

        fontFamily: "Poppins-Light",
    },
    deckCardCount:{
        color: "#ffffff",
        fontSize: 14,
        flex: 1,
        textAlign: "left",
        fontStyle: "italic",

        fontFamily: "Poppins-Light",
    },
    deckProgress:{
        color: "#ffffff",
        fontSize: 14,
        fontStyle: "italic",

        fontFamily: "Poppins-Light",
    },
    deckCardCountProgressContainer:{
        justifyContent: "space-evenly",
        flexDirection: "row",
        width: 311,
        marginBottom: 5,
        marginTop: 5,

    },
    deckProgressBarBG:{
        width: 311,
        height: 10,
        backgroundColor: "#3C4148",
        borderRadius: 50,
        flexDirection: "row",

    },
    deckProgressBar:{
        height: 10,
        backgroundColor: "#ED464A",
        borderRadius: 50,
        width: 50,
    },

    showMoreButton:{
        top: 0,
        width: 335,
        height: 50,
        backgroundColor: ContentBackgroundColor,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    showMoreButtonText:{
        fontFamily: "Poppins-LightItalic",
        color: "#ffffff",
    },
});


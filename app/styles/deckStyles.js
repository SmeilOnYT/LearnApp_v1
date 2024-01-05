import { StyleSheet } from "react-native";

const ContentBackgroundColor = "#393939"

export const DeckSummaryStyles = StyleSheet.create({
    deckContainer:{
        top: 0,
        width: 335,
        height: 115,
        backgroundColor: ContentBackgroundColor,
        borderRadius: 15,
        paddingTop: 12,
        paddingLeft: 12,
        marginBottom: 15,
    },
    deckTitle:{
        color: "#ffffff",
        fontSize: 18,
        marginBottom: 5,
    },
    deckDescription:{
        color: "#ffffff",
        fontSize: 14,
        marginBottom: 8,
    },
    deckCardCount:{
        color: "#ffffff",
        fontSize: 14,
        flex: 1,
        textAlign: "left",
        fontStyle: "italic",
    },
    deckProgress:{
        color: "#ffffff",
        fontSize: 14,
        fontStyle: "italic",
    },
    deckCardCountProgressContainer:{
        justifyContent: "space-evenly",
        flexDirection: "row",
        width: 311,
        marginBottom: 5,
        marginTop: 8,

    },
    deckProgressBarBG:{
        width: 311,
        height: 12,
        backgroundColor: "#535353",
        borderRadius: 50,
        flexDirection: "row",

    },
    deckProgressBar:{
        height: 12,
        backgroundColor: "#ffffff",
        borderRadius: 50,
        width: 50,
    },
});


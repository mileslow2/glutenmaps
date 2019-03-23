import { StyleSheet } from "react-native";
export default (u = StyleSheet.create({
    shadow: {
        shadowColor: "#7a7070",
        shadowRadius: 3,
        shadowOpacity: 1,
        shadowOffset: {height: 1}

    },
    abs: {
        position: "absolute",
    },
    centerH: {
        alignSelf: "center"
    },
    centerV: {
        justifyContent: "center"
    },
    white: {
        backgroundColor:"white"
    },
    row: {
        flexDirection: "row"
    },
    alignItemsCenter: {
        alignItems: "center"
    }
}))

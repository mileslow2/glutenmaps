import { StyleSheet } from "react-native";

export default (s = StyleSheet.create({
    nearbyContainer: {
        width: 100 + "%",
        height: 60,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        bottom: 0,
        backgroundColor: "white"
    },
    text:{
        color:"#8b8b8b",
        fontSize: 30,
        paddingLeft: 17,
        paddingTop: 3
    },
    swipeUpper: {
        width: 80,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#cbcbcb",
        top: 7
    }
}))
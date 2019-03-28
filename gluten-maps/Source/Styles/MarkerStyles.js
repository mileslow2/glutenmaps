import { StyleSheet, Dimensions } from "react-native";
const {width} = Dimensions.get("screen");
export default (s = StyleSheet.create({
  marker: {
    width: 58,
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    bottom: 32,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    zIndex: 1
  },
  triangle: {
    top: 44 ,
    position: "absolute",
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 24,
    borderRightWidth: 24,
    borderBottomWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "white",
    transform: [{ rotate: "180deg" }]
  },
}));

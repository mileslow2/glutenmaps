import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

export default (s = StyleSheet.create({
  bar: {
    height: 54,
    borderRadius: 27
  },
  icon: {
    marginLeft: 9
  },
  text: {
    color: "#a0a0a0",
    fontSize: 18,
    marginTop: 2,
    marginLeft: 5
  },
  close: {
    width: 35,
    height: 35,
    borderRadius: 20
  },
  closeIcon: {
    marginLeft: 2
  },
  cover: {
    backgroundColor: "rgba(156, 156, 156, 0.5)"
  },
  listContainer: {
    zIndex: 20,
    height: height,
    top: height * 0.025
  }
}));

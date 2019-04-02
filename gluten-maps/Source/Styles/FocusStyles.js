import { StyleSheet } from "react-native";

export default (s = StyleSheet.create({
  swipeUpper: {
    width: 80,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#cbcbcb",
    top: 7,
    zIndex: 5
  },
  focusContainer: {
    width: 100 + "%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    bottom: 0,
    backgroundColor: "white"
  },
  bottomHeaderBody: {
    height: 70,
    borderRadius: 24,
    zIndex: 1,
    paddingBottom: 10
  },

  removeShadow: {
    height: 30,
    width: 100 + "%",
    top: 50
  },
  shadowSimulator: {
    height: 50,
    borderRadius: 25,
    shadowOffset: {
      width: 0,
      height: 10
    },
    zIndex: 10
  }
}));

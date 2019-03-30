import { StyleSheet } from "react-native";
export default (u = StyleSheet.create({
  shadow: {
    shadowColor: "#9c9191",
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowOffset: { height: 1 }
  },
  abs: {
    position: "absolute"
  },
  centerH: {
    alignSelf: "center"
  },
  centerV: {
    justifyContent: "center"
  },
  white: {
    backgroundColor: "white"
  },
  row: {
    flexDirection: "row"
  },
  alignItemsCenter: {
    alignItems: "center"
  },
  fullW: {
    width: 100 + "%"
  },
  red: {
    backgroundColor: "red"
  },
  col: {
    flexDirection: "column"
  },
  stars: {
    left: 10,
    bottom: 8
  }
}));

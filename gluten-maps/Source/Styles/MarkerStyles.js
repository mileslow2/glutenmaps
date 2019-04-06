import { StyleSheet, Dimensions } from "react-native";
function r(num) {
  return Math.round(num);
}
const { height } = Dimensions.get("screen");
const markerSize = r(height / 15.44);
export default (s = StyleSheet.create({
  marker: {
    width: markerSize,
    height: markerSize,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: r(markerSize / 2),
    bottom: r(markerSize / 2)
  },
  image: {
    width: r(markerSize / 1.16),
    height: r(markerSize / 1.16),
    borderRadius: r(markerSize / 2.32),
    zIndex: 1
  },
  triangle: {
    top: r(markerSize / 1.32),
    position: "absolute",
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: r(markerSize / 2.42),
    borderRightWidth: r(markerSize / 2.42),
    borderBottomWidth: r(markerSize / 2.9),
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "white",
    transform: [{ rotate: "180deg" }]
  },
  container: {
    padding: r(markerSize / 1.45)
  }
}));

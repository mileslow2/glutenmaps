import { StyleSheet, Dimensions } from "react-native";
import R from "../Components/Universal/Round";
const { height } = Dimensions.get("screen");
const markerSize = R(height / 15.44);
export default (s = StyleSheet.create({
  marker: {
    width: markerSize,
    height: markerSize,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: R(markerSize / 2),
    bottom: R(markerSize / 2),
    elevation: 5
  },
  image: {
    width: R(markerSize / 1.16),
    height: R(markerSize / 1.16),
    borderRadius: R(markerSize / 2.32),
    zIndex: 1
  },
  triangle: {
    top: R(markerSize / 1.32),
    position: "absolute",
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: R(markerSize / 2.42),
    borderRightWidth: R(markerSize / 2.42),
    borderBottomWidth: R(markerSize / 2.9),
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "white",
    transform: [{ rotate: "180deg" }]
  },
  container: {
    padding: R(markerSize / 1.45),
    elevation: 5
  }
}));

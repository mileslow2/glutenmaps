import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
function r(n) {
  return Math.round(n);
}
const largeText = r(height / 35.84);
export default (s = StyleSheet.create({
  title: {
    marginTop: r(largeText / 3.5),
    fontWeight: "bold"
  },
  starContainer: {
    width: largeText * 2,
    marginTop: r(largeText / 0.73)
  },
  paddingLeft: {
    paddingLeft: r(largeText / 1.47)
  },
  info: {
    fontSize: r(largeText / 1.25),
    marginTop: r(largeText / 1.19)
  },
  textColor: {
    color: "#6b6b6b"
  },
  largeText: {
    fontSize: largeText,
    fontWeight: "500"
  },
  star: {
    height: r(largeText / 0.926)
  },
  smallerScreenSpacer: {
    height: r > 23 ? 0 : 10
  }
}));

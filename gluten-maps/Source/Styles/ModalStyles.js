import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
function r(n) {
  return Math.round(n);
}
function f(n) {
  return r(height / 35.84 / n);
}

export default (s = StyleSheet.create({
  textColor: {
    color: "#6b6b6b"
  },
  screenCover: {
    backgroundColor: "rgba(156, 156, 156, 0.5)",
    height,
    width
  },
  hoursContainer: {
    width: r(width * 0.9),
    height: f(1) > 23 ? r(height * 0.35) : r(height * 0.38),
    borderRadius: r(height * 0.04),
    left: r(width * 0.05),
    top: r((height * 0.65) / 2),
    padding: f(0.7813),
    paddingTop: f(0.8333)
  },
  hoursText: {
    fontSize: f(1.315),
    fontWeight: "500",
    paddingBottom: f(4.166)
  },
  modalHeader: {
    fontSize: f(1.315),
    fontWeight: "500",
    paddingBottom: f(1.25)
  }
}));

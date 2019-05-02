import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
import R from "../Components/Universal/Round";
function f(n) {
  return R(height / 35.84 / n);
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
    width: R(width * 0.9),
    height: R(f(1) > 23 ? height * 0.35 : height * 0.38),
    borderRadius: R(height * 0.04),
    left: R(width * 0.05),
    top: R((height * 0.65) / 2),
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

import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
function r(n) {
  return Math.round(n);
}
function f(n) {
  return r(height / 35.84 / n);
}
export default (s = StyleSheet.create({
  itemContainer: {
    height: f(0.5),
    borderBottomRightRadius: f(1),
    borderBottomLeftRadius: f(1),
    marginBottom: f(1.25),
    paddingBottom: f(2.5)
  },
  shadowCover: {
    top: f(-2.5),
    height: f(2.5),
    paddingTop: 0
  },
  other: {
    flex: 7,
    left: f(1.1363),
    fontSize: f(1.1363),
    top: 1
  },
  textColor: {
    color: "#6b6b6b"
  },
  action: {
    flex: 3,
    height: f(0.6578),
    borderRadius: f(1.31),
    backgroundColor: "rgb(83, 204, 151)",
    shadowColor: "#878787",
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: { height: 2 },
    right: f(1.13636),
    bottom: f(5)
  },
  screenCover: {
    backgroundColor: "rgba(156, 156, 156, 0.5)",
    height,
    width
  },
  hoursContainer: {
    width: r(width * 0.9),
    height: r(height * 0.35),
    borderRadius: r(height * 0.04),
    left: r(width * 0.05),
    top: r((height * 0.65) / 2),
    padding: f(0.78125),
    paddingTop: f(0.833)
  },
  modalHeader: {
    fontSize: f(1.3157),
    fontWeight: "500",
    paddingBottom: f(1.25)
  },
  hoursText: {
    fontSize: f(1.3157),
    fontWeight: "500",
    paddingBottom: f(4.166)
  },
  actionText: {
    fontWeight: "bold",
    top: f(3.5714),
    fontSize: f(1.25)
  }
}));

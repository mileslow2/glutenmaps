import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

export default (s = StyleSheet.create({
  title: {
    marginTop: 8,
    fontWeight: "bold"
  },
  starContainer: {
    width: 50,
    marginTop: 33
  },
  paddingLeft: {
    paddingLeft: 17
  },
  info: {
    fontSize: 20,
    marginTop: 21
  },
  textColor: {
    color: "#6b6b6b"
  },
  largeText: {
    fontSize: 25,
    fontWeight: "500"
  },
  other: {
    flex: 7,
    left: 22,
    fontSize: 22,
    top: 1
  },
  action: {
    flex: 3,
    height: 38,
    borderRadius: 19,
    backgroundColor: "rgb(83, 204, 151)",
    shadowColor: "#878787",
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: { height: 2 },
    right: 22,
    bottom: 5
  },
  actionText: {
    fontWeight: "bold",
    top: 7,
    fontSize: 20
  },
  itemContainer: {
    height: 50,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    marginBottom: 20,
    paddingBottom: 10
  },
  shadowCover: {
    top: -10,
    height: 10,
    paddingTop: 0
  },
  screenCover: {
    backgroundColor: "rgba(156, 156, 156, 0.5)",
    height,
    width
  },
  hoursContainer: {
    width: Math.round(width * 0.9),
    height: Math.round(height * 0.35),
    borderRadius: Math.round(height * 0.04),
    left: Math.round(width * 0.05),
    top: Math.round((height * 0.65) / 2),
    padding: 32,
    paddingTop: 30
  },
  hoursText: {
    fontSize: 19,
    fontWeight: "500",
    paddingBottom: 6
  },
  modalHeader: {
    fontSize: 19,
    fontWeight: "500",
    paddingBottom: 20
  }
}));

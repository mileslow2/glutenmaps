import { StyleSheet } from "react-native";

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
  }
}));

import { StyleSheet } from "react-native";

export default (s = StyleSheet.create({
  nearbyContainer: {
    width: 100 + "%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    bottom: 0,
    backgroundColor: "white"
  },
  text: {
    color: "#8b8b8b",
    fontSize: 30,
    paddingLeft: 17,
    paddingTop: 5,
    zIndex: 2
  },
  swipeUpper: {
    width: 80,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#cbcbcb",
    top: 7,
    zIndex: 5
  },
  removeShadow: {
    height: 30,
    width: 100 + "%",
    top: -5
  },
  listImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    bottom: 8,
    left: 8
  },
  itemContainer: {
    height: 50,
    borderBottomRightRadius: 28,
    borderBottomLeftRadius: 28,
    marginBottom: 20
  },
  shadowCover: {
    top: -10,
    height: 10,
    paddingTop: 0
  },
  itemText: {
    color: "#5c5c5c",
    fontSize: 20,
    left: 14,
    fontWeight: "bold",
    bottom: 8
  },
  distanceText: {
    top: 27,
    right: 20,
    fontSize: 18,
    color: "#5c5c5c"
  },
  bottomHeaderBody: {
    height: 70,
    borderRadius: 24,
    zIndex: 1
  },
  bottomHeaderShadowCover: {
    height: 20,
    bottom: 25,
    zIndex: 2
  },
  filterButton: {
      width: 40,
      height: 40,
    borderRadius: 20,
        zIndex: 20,
       right: 20,
       marginTop: 13
  },
  filterButtonIcon: {
      top: 5,
      marginLeft:5
  }
}));

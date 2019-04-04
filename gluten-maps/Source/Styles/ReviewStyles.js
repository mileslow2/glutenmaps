import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
export default (s = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: "500",
    paddingLeft: 17,
    color: "#6b6b6b",
    flex: 6
  },
  button: {
    backgroundColor: "rgb(83, 204, 151)",
    height: 35,
    flex: 4,
    borderRadius: 18,
    marginRight: 35,
    shadowColor: "#878787",
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: { height: 2 },
    bottom: 3
  },
  buttonText: {
    fontSize: 19,
    fontWeight: "bold",
    top: 6
  },
  reviewListContainer: {
    height: Math.round(height * 0.19),
    marginTop: 6,
    zIndex: 3
  },
  reviewListItem: {
    height: 150,
    width: Math.round(width * 0.54),
    borderRadius: 25,
    marginLeft: 17,
    marginTop: 5,
    padding: 8,
    paddingTop: 7
  },
  tapMore: {
    color: "rgb(83, 204, 151)",
    fontSize: 16
  },
  name: {
    color: "#424242",
    fontWeight: "500",
    fontSize: 16,
    flex: 5
  },
  itemRating: {
    flex: 3
  },
  review: {
    color: "#6b6b6b",
    fontSize: 13
  },
  borderRadius: {
    height: 40,
    borderRadius: 20
  },
  reviewEnd: {
    height: 50,
    borderRadius: 25
  },
  reviewEndHelper: {
    height: 40,
    top: 20
  }
}));

import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
import R from "../Components/Universal/Round";
// f stands for flexible
function f(n) {
  return R(height / 35.84 / n);
}
export default (s = StyleSheet.create({
  header: {
    fontSize: f(1),
    fontWeight: "500",
    paddingLeft: f(1.47),
    color: "#6b6b6b",
    flex: 6
  },
  button: {
    backgroundColor: "rgb(83, 204, 151)",
    height: f(0.7143),
    flex: 4,
    borderRadius: f(1.39),
    marginRight: f(0.7143),
    shadowColor: "#878787",
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: { height: 2 },
    elevation: 5,
    bottom: 3
  },
  buttonText: {
    fontSize: f(1.3157),
    fontWeight: "bold",
    top: f(4.1666)
  },
  reviewListContainer: {
    height: f(f(1) > 23 ? 0.14705 : 0.12),
    marginTop: f(4.16),
    zIndex: 3
  },
  reviewListItem: {
    height: f(f(1) > 23 ? 0.1667 : 0.13),
    width: R(width * 0.54),
    borderRadius: 25,
    marginLeft: 17,
    marginTop: 5,
    padding: 8,
    paddingTop: 7
  },
  tapMore: {
    color: "rgb(83, 204, 151)",
    fontSize: f(1.5625),
    bottom: f(1) > 23 ? 0 : 2
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
    fontSize: f(f(1) > 23 ? 1.923 : 1.5)
  },
  borderRadius: {
    height: f(0.625),
    borderRadius: f(1.25)
  },
  reviewEnd: {
    height: f(0.5),
    borderRadius: f(1)
  },
  reviewEndHelper: {
    height: f(0.625),
    top: f(1.25)
  },
  star: {
    width: f(1.25)
  }
}));

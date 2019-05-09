import { StyleSheet, Dimensions } from "react-native";
import R from "../Components/Universal/Round";
const { width, height } = Dimensions.get("screen");
function f(n) {
  return R(width / n);
}
const emerald = "rgb(83, 204, 151)";
export default (s = StyleSheet.create({
  container: {
    height,
    width: R((width * 4) / 5),
    borderBottomRightRadius: f(20),
    borderTopRightRadius: f(20),
    paddingLeft: 20
  },
  letterDisk: {
    width: f(7),
    height: f(7),
    borderRadius: f(3.5),
    backgroundColor: emerald
  },
  letter: {
    color: "white",
    fontSize: 30,
    fontWeight: "600"
  },
  nameContainer: {
    paddingTop: f(9)
  },
  name: {
    color: "rgb(80, 80, 80)",
    fontSize: f(16),
    fontWeight: "500"
  },
  reviewAmount: {
    color: "rgb(130, 130, 130)",
    fontWeight: "500",
    fontSize: f(25),
    bottom: 4
  },
  textContainer: {
    paddingLeft: 10,
    top: 2
  },
  shareText: {
    color: emerald
  },
  actionText: {
    fontSize: f(12),
    fontWeight: "400",
    paddingTop: 20
  },
  actionContainer: {
    top: f(6)
  }
}));

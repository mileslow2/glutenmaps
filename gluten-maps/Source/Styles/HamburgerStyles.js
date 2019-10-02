import { Dimensions } from "react-native";
const { height } = Dimensions.get("screen");
const bottom = height > 800 ? 103 : 70;
const HamburgerStyles = {
  bottom,
  width: 55,
  height: 55,
  borderRadius: 28,
  left: 20,
  paddingTop: 10,
  paddingLeft: 12
};
export default HamburgerStyles;

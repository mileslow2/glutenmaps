import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get("screen");
const emerald = "rgb(83, 204, 151)";

function f(val) {
  return Math.round(height / val);
}

export default (u = StyleSheet.create({
  loginButton: {
    width: f(3),
    height: f(16),
    borderRadius: f(32),
    backgroundColor: emerald,
    marginTop: f(80)
  },
  buttonText: {
    fontSize: f(35),
    fontWeight: "600"
  },
  fieldHeader: {
    fontSize: f(35),
    fontWeight: "500",
    color: emerald,
    left: f(400),
    marginBottom: f(300)
  },
  field: {
    width: f(3),
    height: f(16),
    borderRadius: f(66),
    padding: 10,
    fontSize: f(45)
  },
  offset: {
    top: f(3.8)
  },
  signUpOffset: {
    top: f(10)
  },
  fieldContainer: {
    marginBottom: f(100)
  },
  editOffset: {
    top: f(24)
  }
}));

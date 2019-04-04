import { StyleSheet } from "react-native";

export default (s = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: "500",
    paddingLeft: 17,
    color: "#6b6b6b",
    flex: 6
  },
  button: {
    backgroundColor: "rgb(168, 214, 194)",
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
  offset: {
    marginTop: -5
  }
}));

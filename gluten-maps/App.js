import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> hey guys </Text>
        <Text> I'm arex </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(133, 198, 79)",
    alignItems: "center",
    justifyContent: "center"
  }
});

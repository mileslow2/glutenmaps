import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import moduleName from 'module'
export default class App extends React.Component {
  state = {
    text: ""
  }
  changeText = text => {
    this.setState({text: text})
    console.log(this.state.text)
  }
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

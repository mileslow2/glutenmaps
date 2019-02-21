import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

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
        <TextInput
        style={{backgroundColor: "rgb(255,0,0)", width: 50 + "%"}}
        value={this.state.text}
          onChangeText={(text)=>{
            this.changeText(text)
          }}
        />
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

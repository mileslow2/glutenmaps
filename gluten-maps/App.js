import React from 'react';
import {View, Text} from "react-native";
import Map from "./Components/Map";
import {Location, Permissions } from "expo";

export default class App extends React.Component {
  state = {
    Location: null
  }
  componentWillMount() {
    this.getLocation();
  }
  getLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location:location });
  }

  render() {
    if(this.state.location == null) {
      return (
        <View>
          <Text>add stuff if they don't say yes</Text>
        </View>
      )
    }
    return (
      <Map location = {this.state.location}/>
    );
  }
}
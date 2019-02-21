import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Map from "./Main/Map";
import { Location, Permissions } from "expo";
import s from "./styles";

export default class App extends React.Component {
  state = {
    region: null,
    coffeeShops: []
  };
  componentWillMount() {
    this.getLocation();
  }
  getLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      region: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    });
  };

  render() {
    if (this.state.region == null) {
      return (
        <View>
          <Text>add stuff if they don't say yes</Text>
        </View>
      );
    }
    return (
      <SafeAreaView>
        <Map region={this.state.region} places={this.state.coffeeShops} />
      </SafeAreaView>
    );
  }
}

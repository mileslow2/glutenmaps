import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Map from "./Map";
import { Location, Permissions } from "expo";
import GetPlaces from "../../Fetchers/GetPlaces";

export default class Main extends React.Component {
  state = {
    region: null,
    markers: []
  };
  componentWillMount() {
    this.getLocation();
  }

  setMarkers = async loc => {
    const markers = await GetPlaces(loc);
    this.setState({ markers: markers });
  };

  getLocation = async () => {
    await Permissions.askAsync(Permissions.LOCATION);
    const location = await Location.getCurrentPositionAsync({});
    this.setState({
      region: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0154,
        longitudeDelta: 0.0069
      }
    });
    this.setMarkers(location.coords);
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
        <Map region={this.state.region} markers={this.state.markers} />
      </SafeAreaView>
    );
  }
}

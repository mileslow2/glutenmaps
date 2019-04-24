import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Map from "./Map";
import { Location, Permissions, Constants } from "expo";
import GetPlaces from "../../Fetchers/GetPlaces";

export default class Main extends React.Component {
  state = {
    region: null,
    markers: []
  };
  async componentWillMount() {
    await Permissions.askAsync(Permissions.LOCATION);
    const location = await Location.getCurrentPositionAsync({});
    console.log(location);
    const region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0154,
      longitudeDelta: 0.0069
    };
    this.setRegion(region);
    this.setMarkers(location.coords);
  }

  setRegion(region) {
    this.setState({
      region
    });
  }
  setMarkers = async loc => {
    var markers = await GetPlaces(loc);
    this.setState({ markers: markers });
  };

  render() {
    if (this.state.region == null) {
      return (
        <View style={{ backgroundColor: "red", flex: 1 }}>
          <Text />
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

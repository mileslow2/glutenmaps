import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Map from "./Main/Map";
import { Location, Permissions } from "expo";
import s from "./styles";
function makeParam(param, value) {
  return param + "=" + value + "&";
}
export default class App extends React.Component {
  state = {
    region: null,
    markers: []
  };
  componentWillMount() {
    this.getLocation();
  }

  setMarkers = data => {
    this.setState({markers: data});
  }

  getPlaces = async loc => {
    var googleMapRequest =
      "https://maps.googleapis.com/maps/api/place/textsearch/json?";
    googleMapRequest += makeParam(
      "key",
      "AIzaSyCaUWYt5ncgdYaU_zE10HsPxXN1BnSySRQ"
    );
    googleMapRequest += makeParam("input", "gluten-free");
    googleMapRequest += makeParam("location", loc.latitude + "," + loc.longitude);
    googleMapRequest += makeParam("radius", "100");
    googleMapRequest = googleMapRequest.substr(0, googleMapRequest.length-1); //removes the & from the end
    try {
      await fetch(googleMapRequest)
      .then((res) => res.json())
      .then((res) => {this.setMarkers(res)})
    } catch (error) {
      console.error(error);
    }
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
    this.getPlaces(location.coords);
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
        <Map region={this.state.region} markers={this.state.markers.results}/>
      </SafeAreaView>
    );
  }
}

import React, { Component } from "react";
import { View, Text } from "react-native";
import { MapView } from "expo";
import s from "../styles";
const Marker = MapView.Marker;
export default class Map extends Component {
  renderMarkers = markers => {
    if (markers == undefined) {
      return null; //it gets madd when it's undefined
    } else {
      for (var i = 0; i < markers.length; i++) {
        //gives all elements a key, so RN doesn't freak out
        markers[i].key = i;
      }
      return markers.map(marker => (
        <Marker
          coordinate={{
            latitude: marker.geometry.location.lat,
            longitude: marker.geometry.location.lng
          }}
          key={marker.key}
          title={marker.name}
        >
        </Marker>
      ));
    }
  };

  render() {
    const { region } = this.props;
    return (
      <MapView
        style={s.container}
        initialRegion={this.props.region}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        {this.renderMarkers(this.props.markers)}
      </MapView>
    );
  }
}

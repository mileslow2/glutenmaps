import React, { Component } from "react";
import { View, Text } from "react-native";
import { MapView } from "expo";
import s from "./Styles/MapStyles";
import u from "./Styles/UniversalStyles";
import { FontAwesome } from "@expo/vector-icons";
import MarkerBody from "./Marker"
import Nearby from "./Nearby";
import SearchBar from './SearchBar'
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
        <MarkerBody
          photo_reference={marker.photos[0].photo_reference}
        />
        </Marker>
      ));
    }
  };

  // onRegionChange(region) { //whenever the region is changed, this changes the 
  //   this.setState({ region });
  // }

  renderCenterButton = () =>{
    return (
      <View style={[s.button, u.abs, u.shadow, u.white]}>
        <FontAwesome style={[u.centerH, u.centerV, s.icon]}name={"location-arrow"} size={40} color={"#a8d6c2"} />
      </View>
    );
  }

  render() {
    return (
      <View>
      <MapView
        style={s.container}
        initialRegion={this.props.region}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        {this.renderMarkers(this.props.markers)}
      </MapView>
      <SearchBar/>
       {this.renderCenterButton()}
        <Nearby/>
      </View>
    );
  }
}

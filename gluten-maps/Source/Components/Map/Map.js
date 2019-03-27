import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { MapView, Location } from "expo";
import s from "../../Styles/MapStyles";
import u from "../../Styles/UniversalStyles";
import { FontAwesome } from "@expo/vector-icons";
import MarkerBody from "./Marker";
import Nearby from "../Nearby/Nearby";
import SearchBar from "../SearchBar";
import GetImage from "../../Fetchers/GetImage";

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
        >
          <MarkerBody 
          data={marker}
          imageURI={GetImage(marker.photos[0].photo_reference)} />
        </Marker>
      ));
    }
  };

  centerMap = async () => {
    const location = await Location.getCurrentPositionAsync({});
    const locationCoords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    };
    this.map.animateToCoordinate(locationCoords, 500);
  };
  
  renderCenterButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.centerMap();
        }}
        style={[s.button, u.abs, u.shadow, u.white]}
      >
        <FontAwesome
          style={[u.centerH, u.centerV, s.icon]}
          name={"location-arrow"}
          size={40}
          color={"#a8d6c2"}
        />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View>
        <MapView
          ref={map => {
            this.map = map;
          }}
          style={s.container}
          initialRegion={this.props.region}
          showsUserLocation={true}
          showsMyLocationButton={true}
        >
          {this.renderMarkers(this.props.markers)}
        </MapView>
        <SearchBar />
        {this.renderCenterButton()}
        <Nearby
          restaurants={this.props.markers}
          loc={{
            lat: this.props.region.latitude,
            lon: this.props.region.longitude
          }}
        />
      </View>
    );
  }
}

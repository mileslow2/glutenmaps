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
import { Store } from "../../redux";
const Marker = MapView.Marker;

export default class Map extends Component {
  state = {
    currentMarker: -1,
    ableMove: true
  };

  componentWillMount() {
    Store.subscribe(() => {
      const storeState = Store.getState();
      storeState.location.latitude -= 0.004;
      this.moveMap(storeState.location);
      this.setState({
        currentMarker: storeState.key
      });
    });
  }

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
            focusKey={this.state.currentMarker}
            markerKey={marker.key}
            location={{
              latitude: marker.geometry.location.lat,
              longitude: marker.geometry.location.lng
            }}
            imageURI={GetImage(marker.photos[0].photo_reference)}
          />
        </Marker>
      ));
    }
  };

  moveMap(loc) {
    const newRegion = {
      latitude: loc.latitude,
      longitude: loc.longitude,
      latitudeDelta: 0.0154,
      longitudeDelta: 0.0069
    };
    this.map.animateToRegion(newRegion, 400);
  }
  centerMap = async () => {
    const location = await Location.getCurrentPositionAsync({});
    const locationCoords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    };
    this.moveMap(locationCoords);
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
          showsMyLocationButton={false}
          rotateEnabled={false}
          pitchEnabled={false}
          showsCompass={false}
          zoomEnabled={this.state.ableMove}
          zoomTapEnabled={false}
        >
          {this.renderMarkers(this.props.markers, this.state.currentMarker)}
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

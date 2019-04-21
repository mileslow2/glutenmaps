import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { MapView, Location } from "expo";
import s from "../../Styles/MapStyles";
import u from "../../Styles/UniversalStyles";
import { FontAwesome } from "@expo/vector-icons";
import Focus from "../Focus/Focus";
import SearchBar from "../Search/SearchBar";
import { Store } from "../../Redux";
import RenderMarkers from "./RenderMarkers";
const Marker = MapView.Marker;

export default class Map extends Component {
  state = {
    currentMarker: -1,
    showSearch: true
  };

  componentWillMount() {
    var newLat;
    var store;
    var restFocus;
    Store.subscribe(() => {
      store = Store.getState();
      if (typeof store == "object") {
        //if store is updating marker
        restFocus = store.key == -1;
        newLat = restFocus ? 0.0043 : 0.0057;
        store.location.latitude -= newLat;
        this.moveMap(store.location);
        this.setState({
          currentMarker: store.key,
          showSearch: restFocus
        });
        this.forceUpdate(); // makes sure all the markers get updated
      } else {
        // if the store isn't updating the marker, it's trying to remove the search bar
        this.setState({
          showSearch: store
        });
      }
    });
  }

  unfocus = () => {
    this.setState({
      showSearch: true,
      currentMarker: -1
    });
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
          color={"rgb(83, 204, 151)"}
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
          zoomEnabled={false}
          zoomTapEnabled={false}
        >
          {RenderMarkers(this.props.markers, this.state.currentMarker)}
        </MapView>
        <SearchBar
          showSearch={this.state.showSearch}
          restaurants={this.props.markers}
        />
        {this.renderCenterButton()}
        <Focus
          restaurants={this.props.markers}
          loc={{
            lat: this.props.region.latitude,
            lon: this.props.region.longitude
          }}
          currentMarker={this.state.currentMarker}
        />
      </View>
    );
  }
}

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
import cloneDeep from "clone-deep";
const Marker = MapView.Marker;

export default class Map extends Component {
  state = {
    currentMarker: -1,
    showSearch: true
  };

  componentWillMount() {
    var store;
    Store.subscribe(() => {
      store = cloneDeep(Store.getState());
      this.operateMap(store);
    });
  }

  operateMap(store) {
    if (typeof store == "object") {
      //if store is updating marker
      const restFocus = store.key == -1;
      const newLat = restFocus ? 0.0043 : 0.0057;
      var newLoc = store.location;
      newLoc.latitude -= newLat;
      // store.location.latitude -= newLat;
      this.moveMap(newLoc);
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
  }

  unfocus = () => {
    this.setState({
      showSearch: true,
      currentMarker: -1
    });
  };

  moveMap(loc) {
    // loc.latitudeDelta = 0.0154;
    // loc.longitudeDelta = 0.0069;
    this.map.animateToRegion(loc, 400);
  }

  centerMap = async () => {
    const location = await Location.getCurrentPositionAsync({});
    this.moveMap(location.coords);
  };

  renderButton = action => {
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
          zoomTapEnabled={false}
        >
          {RenderMarkers(
            this.props.markers,
            this.state.currentMarker,
            this.props.region
          )}
        </MapView>
        <SearchBar
          showSearch={this.state.showSearch}
          restaurants={this.props.markers}
        />
        {this.renderButton("center")}
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

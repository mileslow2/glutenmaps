import React, { Component } from "react";
import { MapView } from "expo";
import { View } from "react-native";
import MarkerBody from "./Marker";
import GetImage from "../../Fetchers/GetImage";
import abs from "../Universal/Abs";
const Marker = MapView.Marker;

export default function RenderMarkers(markers, currentMarker, region) {
  return markers.map(marker => (
    <Marker
      coordinate={{
        latitude: marker.geometry.location.lat,
        longitude: marker.geometry.location.lng
      }}
      key={marker.key}
    >
      <MarkerBody
        focusKey={currentMarker}
        markerKey={marker.key}
        location={{
          latitude: marker.geometry.location.lat,
          longitude: marker.geometry.location.lng
        }}
        regionLat={region.latitude}
        regionLatDel={region.latitudeDelta}
        imageURI={GetImage(marker.photos[0].photo_reference, marker.key)}
      />
    </Marker>
  ));
}

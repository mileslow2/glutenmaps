import React, { Component } from "react";
import { MapView } from "expo";
import MarkerBody from "./Marker";
import GetImage from "../../Fetchers/GetImage";
const Marker = MapView.Marker;

export default function RenderMarkers(markers, currentMarker) {
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
          focusKey={currentMarker}
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
}

import React, { Component } from "react"
import { View, Text } from "react-native"
import { MapView } from "expo"
import s from "../styles";
const Marker = MapView.Marker

export default class Map extends Component {
  
  render() {
    const { region } = this.props
    return (
      <MapView
        style={s.container}
        initialRegion= {
          this.props.region
        }
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
      </MapView>
    )
  }
}
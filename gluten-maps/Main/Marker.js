import React from "react";
import s from "./Styles/MarkerStyles";
import u from "./Styles/UniversalStyles";
import { View, Text, Animated, Image } from "react-native";
import GetImage from "./Fetchers/GetImage";
export default class MarkerBody extends React.Component {
  state = {
    toggled: false
  };
  render() {
    return (
      <View style={[s.marker, u.shadow]}>
        <Image
          style={s.image}
          source={{ uri: GetImage(this.props.photo_reference) }}
        />
        <View style={s.triangle} />
      </View>
    );
  }
}

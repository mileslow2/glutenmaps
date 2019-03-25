import React from "react";
import s from "./Styles/MarkerStyles";
import u from "./Styles/UniversalStyles";
import { View, Text, Animated, Image } from "react-native";
export default class MarkerBody extends React.Component {
  state = {
    toggled: false
  };
  render() {
    return (
      <View style={[s.marker, u.shadow]}>
        <Image
          style={s.image}
          source={{ uri: this.props.imageURI }}
        />
        <View style={s.triangle} />
      </View>
    );
  }
}

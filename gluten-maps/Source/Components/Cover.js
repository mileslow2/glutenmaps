import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import u from "../Styles/UniversalStyles";
const { width, height } = Dimensions.get("screen");

export default class Cover extends Component {
  render() {
    const opacity = this.props.icon == "#a0a0a0" ? 0 : 0.5;
    const backgroundColor = "rgba(156, 156, 156, " + opacity + ")";
    return (
      <View
        style={[
          u.abs,
          {
            width: width,
            height: height,
            left: -1 * this.props.halfW,
            backgroundColor: backgroundColor
          }
        ]}
      />
    );
  }
}

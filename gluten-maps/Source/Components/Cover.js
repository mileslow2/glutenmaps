import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import u from "../Styles/UniversalStyles";
const { width, height } = Dimensions.get("screen");

export default class Cover extends Component {
  render() {
    if (this.props.icon == "#a0a0a0") return null;
    return (
      <View
        style={[
          u.abs,
          {
            width: width,
            height: height,
            left: this.props.offset,
            backgroundColor: "rgba(156, 156, 156, 0.5)"
          }
        ]}
      />
    );
  }
}

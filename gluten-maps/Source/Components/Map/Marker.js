import React from "react";
import s from "../../Styles/MarkerStyles";
import u from "../../Styles/UniversalStyles";
import { View, Text, Animated, Image, TouchableOpacity } from "react-native";
export default class MarkerBody extends React.Component {
  state = {
    taps: 0
  };

  renderNotTapped = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ taps: 1 });
        }}
        activeOpacity={1}
        style={[s.notTapped, u.shadow]}
      >
        <Image style={s.image} source={{ uri: this.props.imageURI }} />
        <View style={s.triangle} />
      </TouchableOpacity>
    );
  };

  renderTappedOnce = () => {
    console.log(this.props.data)
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ taps: 2 });
        }}
        activeOpacity={1}
        style={[s.tappedOnce, u.shadow, u.white]}
      >
      <Text style={s.oneTapText}>
        {this.props.data.name}
      </Text>
        <View style={[s.triangle, s.tappedOnceTriangle]} />
      </TouchableOpacity>
    );
  };

  decideRender = () => {
    taps = this.state.taps;
    var component = this.renderNotTapped();
    if (taps == 1) {
      component = this.renderTappedOnce();
    } else if (taps == 2) {
      component = this.renderTappedTwice();
    }
    return component;
  };

  render() {
    return <View>{this.decideRender()}</View>;
  }
}

import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  PanResponder,
  Dimensions
} from "react-native";
import s from "../../Styles/FocusStyles";
import u from "../../Styles/UniversalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Store } from "../../Redux";

import Decide from "./Decider";
import Nearby from "../Nearby/Nearby";

const { height } = Dimensions.get("screen");

const adjustedHeight =
  height > 736 ? Math.round(height * 0.9) : Math.round(height * 0.95);

export default class Focus extends Component {
  state = {
    focusToggled: false
  };

  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      const focusHeight = !this.state.focusToggled ? 60 : adjustedHeight;
      const newValue = focusHeight - gesture.dy;
      this.upAnim.setValue(newValue);
    },
    onPanResponderEnd: (event, gesture) => {
      if (Math.abs(gesture.dy) > 20) {
        this.renderFocus();
      }
    }
  });

  upAnim = new Animated.Value(60);

  renderFocus = () => {
    const focusHeight = this.state.focusToggled ? 60 : adjustedHeight;
    Animated.spring(this.upAnim, {
      toValue: focusHeight,
      timing: 500,
      friction: 7
    }).start();
    this.setState({
      focusToggled: !this.state.focusToggled
    });
    const focusToggled = this.state.focusToggled;
    Store.dispatch({ type: "update", payload: focusToggled });
  };

  removeShadow = () => {
    if (this.state.focusToggled) return null;
    return <View style={[s.removeShadow, u.abs, u.white, u.z1]} />;
  };

  packageDecider = () => {
    const data = {
      correctHeight: adjustedHeight,
      restaurants: this.props.restaurants,
      loc: this.props.loc
    };
    return Decide(data, this.state.focusToggled);
  };

  render() {
    return (
      <View>
        <Animated.View
          style={[s.focusContainer, u.abs, { height: this.upAnim }]}
        >
          <View
            {...this.panResponder.panHandlers}
            style={[u.fullW, u.white, u.shadow, s.bottomHeaderBody]}
          >
            <TouchableOpacity
              onPress={this.renderFocus}
              style={[s.swipeUpper, u.centerH]}
            />
            {this.removeShadow()}
            {this.packageDecider()}
          </View>
        </Animated.View>
      </View>
    );
  }
}

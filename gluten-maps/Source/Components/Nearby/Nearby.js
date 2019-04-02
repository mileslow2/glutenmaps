import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  PanResponder,
  Dimensions
} from "react-native";
import s from "../../Styles/NearbyStyles";
import u from "../../Styles/UniversalStyles";
import NearbyList from "./NearbyList";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Store } from "../../Redux";

const { height } = Dimensions.get("screen");

const adjustedHeight =
  height > 736 ? Math.round(height * 0.9) : Math.round(height * 0.95);

export default class Nearby extends Component {
  state = {
    nearbyToggled: false
  };

  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      const nearbyHeight = !this.state.nearbyToggled ? 60 : adjustedHeight;
      const newValue = nearbyHeight - gesture.dy;
      this.upAnim.setValue(newValue);
    },
    onPanResponderEnd: (event, gesture) => {
      if (Math.abs(gesture.dy) > 20) {
        this.renderNearby();
      }
    }
  });

  upAnim = new Animated.Value(60);

  renderNearby = () => {
    const nearbyHeight = this.state.nearbyToggled ? 60 : adjustedHeight;
    Animated.spring(this.upAnim, {
      toValue: nearbyHeight,
      timing: 500,
      friction: 7
    }).start();
    this.setState({
      nearbyToggled: !this.state.nearbyToggled
    });
    const nearbyToggled = this.state.nearbyToggled;
    Store.dispatch({ type: "update", payload: nearbyToggled });
  };

  renderFilter = this.state.nearbyToggled ? (
    <TouchableOpacity style={[u.shadow, s.filterButton, u.white, u.abs]}>
      <MaterialCommunityIcons
        name={"filter-variant"}
        size={30}
        color={"#cbcbcb"}
        style={s.filterButtonIcon}
      />
    </TouchableOpacity>
  ) : null;

  removeShadow = !this.state.nearbyToggled ? (
    <View style={[s.removeShadow, u.abs, u.white]} />
  ) : null;

  render() {
    return (
      <View>
        <Animated.View
          style={[s.nearbyContainer, u.abs, { height: this.upAnim }]}
        >
          <View
            {...this.panResponder.panHandlers}
            style={[u.fullW, u.white, u.shadow, s.bottomHeaderBody]}
          >
            <TouchableOpacity
              onPress={this.renderNearby}
              style={[s.swipeUpper, u.centerH]}
            />
            <Text style={s.text}>Nearby Restaurants</Text>
            {this.filter}
          </View>
          <NearbyList
            loc={this.props.loc}
            restaurants={this.props.restaurants}
            toggled={this.state.toggled}
          />
        </Animated.View>
        {this.removeShadow}
      </View>
    );
  }
}

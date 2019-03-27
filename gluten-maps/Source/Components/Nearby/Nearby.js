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

const {height} = Dimensions.get('screen');

export default class Nearby extends Component {
  state = {
    nearbyToggled: false
  };

  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderRelease: (event, gesture) => {
      if (Math.abs(gesture.dy) > 20) {
        this.renderNearby();
      }
    }
  });

  upAnim = new Animated.Value(60);

  renderNearby = () => {
    const adjustedHeight = (height>736) ? Math.round(height*.90) :  Math.round(height*.95);
    const nearbyHeight = this.state.nearbyToggled ? 60 : adjustedHeight;
    Animated.timing(this.upAnim, {
      toValue: nearbyHeight,
      timing: 400
    }).start();
    this.setState({
      nearbyToggled: !this.state.nearbyToggled
    });
  };

  render() {
    const removeShadow = !this.state.nearbyToggled ? (
      <View style={[s.removeShadow, u.abs, u.white]} />
    ) : null;
    const filter = this.state.nearbyToggled ? (
      <TouchableOpacity style={[u.shadow, s.filterButton, u.white, u.abs]}>
        <MaterialCommunityIcons
          name={"filter-variant"}
          size={30}
          color={"#cbcbcb"}
          style={s.filterButtonIcon}
        />
      </TouchableOpacity>
    ) : null;

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
            {filter}
          </View>
          <NearbyList
            loc={this.props.loc}
            restaurants={this.props.restaurants}
            toggled={this.state.toggled}
          />
        </Animated.View>
        {removeShadow}
      </View>
    );
  }
}

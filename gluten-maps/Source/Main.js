import Hamburger from "react-native-hamburger";
import React, { Component } from "react";
import { View, Animated } from "react-native";
import MapContainer from "./Components/Map/MapContainer";
import Profile from "./Components/Profile/Profile";
import u from "./Styles/UniversalStyles";
import HamburgerStyles from "./Styles/HamburgerStyles";
const emerald = "rgb(83, 204, 151)";

export default class Main extends Component {
  state = {
    profileToggled: false
  };

  render() {
    const correctColor = this.state.profileToggled ? "grey" : emerald;
    const renderMenu = (
      <View style={[HamburgerStyles, u.abs, u.shadow, u.white]}>
        <Animated.View style={{ transform: [{ scale: 1.5 }] }}>
          <Hamburger
            type={"spinCross"}
            active={this.state.profileToggled}
            color={correctColor}
            onPress={() => {
              this.setState({ profileToggled: !this.state.profileToggled });
            }}
          />
        </Animated.View>
      </View>
    );
    return (
      <View>
        <Main />
        <View style={({ zIndex: 1 }, u.abs)}>
          <Profile render={this.state.profileToggled} />
        </View>
        {renderMenu}
      </View>
    );
  }
}

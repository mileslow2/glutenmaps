import React from "react";
import s from "../../Styles/MarkerStyles";
import u from "../../Styles/UniversalStyles";
import { View, Animated, Image, TouchableOpacity } from "react-native";
import { Store } from "../../redux";

export default class MarkerBody extends React.Component {
  markerScale = new Animated.Value(0);

  focusRestaurant = () => {
    const payload = {
      location: this.props.location,
      key: this.props.markerKey
    };
    Store.dispatch({ type: "update", payload: payload });
    Animated.spring(this.markerScale, {
      toValue: 1.6,
    }).start();
  };

  blurRestaurant = () => {
    // introduces it as well, don't freak out
    Animated.spring(this.markerScale, {
      toValue: 1
    }).start();
  };

  render() {
    const currentKey = this.props.markerKey;
    const focusKey = this.props.focusKey;
    // console.log(focusKey)
    // if (focusKey == -1) {
    //   //????
    // }
    if (currentKey != focusKey) {
      this.blurRestaurant();
    }
    return (
      <Animated.View style={{ transform: [{ scale: this.markerScale }] }}>
        <TouchableOpacity
          onPress={() => {
            this.focusRestaurant();
          }}
          activeOpacity={1}
          style={[s.marker, u.shadow]}
        >
          <Image
            onLoadEnd={this.blurRestaurant}
            style={s.image}
            source={{ uri: this.props.imageURI }}
          />
          <View style={s.triangle} />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

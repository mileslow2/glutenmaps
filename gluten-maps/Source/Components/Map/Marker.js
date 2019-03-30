import React from "react";
import s from "../../Styles/MarkerStyles";
import u from "../../Styles/UniversalStyles";
import { View, Animated, Image, TouchableOpacity } from "react-native";
import { Store } from "../../Redux";

export default class MarkerBody extends React.Component {
  markerScale = new Animated.Value(0);

  animate = toValue => {
    Animated.spring(this.markerScale, {
      toValue: toValue,
      friction: 3
    }).start();
  };

  focusRestaurant = () => {
    const payload = {
      location: this.props.location,
      key: this.props.markerKey
    };
    Store.dispatch({ type: "update", payload: payload });
    this.animate(1.6);
  };

  blurRestaurant = () => {
    // introduces it as well, don't freak out
    this.animate(1);
  };

  render() {
    const currentKey = this.props.markerKey;
    const focusKey = this.props.focusKey;

    var translateY;
    if (currentKey != focusKey) {
      this.blurRestaurant();
      translateY = 0;
    } else {
      translateY = -15;
    }
    return (
      <TouchableOpacity
        onPress={() => {
          this.focusRestaurant();
        }}
        activeOpacity={1}
        style={s.container}
      >
        <Animated.View
          style={[
            s.marker,
            u.shadow,
            {
              transform: [
                { scale: this.markerScale },
                { translateY: translateY }
              ]
            }
          ]}
        >
          <Image
            onLoad={this.blurRestaurant}
            style={s.image}
            source={{ uri: this.props.imageURI }}
          />
          <View style={s.triangle} />
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

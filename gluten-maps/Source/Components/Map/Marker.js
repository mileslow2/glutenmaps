import React from "react";
import s from "../../Styles/MarkerStyles";
import u from "../../Styles/UniversalStyles";
import { View, Animated, Image, TouchableOpacity } from "react-native";
import { Store } from "../../Redux";

export default class MarkerBody extends React.Component {
  markerScale = new Animated.Value(0);

  markerOffet = new Animated.Value(0);

  animateOffset = toValue => {
    Animated.timing(this.markerOffet, {
      toValue
    }).start();
  };

  animateMarker = toValue => {
    Animated.spring(this.markerScale, {
      toValue,
      friction: 3
    }).start();
  };

  focusRestaurant = () => {
    const payload = {
      location: this.props.location,
      key: this.props.markerKey
    };
    Store.dispatch({ type: "update", payload: payload });
  };

  blurRestaurant = () => {
    // introduces it as well, don't freak out
    val = s.marker.width > 50 ? 1 : 1.2;
    this.animateMarker(val);
    this.animateOffset(0);
  };

  render() {
    const currentKey = this.props.markerKey;
    const focusKey = this.props.focusKey;

    if (currentKey != focusKey) {
      this.blurRestaurant();
    } else {
      this.animateMarker(1.6);
      this.animateOffset(-16);
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
                { translateY: this.markerOffet }
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

import React, { Component } from "react";
import { Animated, View, Flatlist, TouchableOpacity, Text } from "react-native";
import Cover from "../Universal/Cover";
import Name from "./Name";
import s from "../../Styles/ProfileStyles";
import u from "../../Styles/UniversalStyles";
export default class Profile extends Component {
  state = { render: true };

  translateX = new Animated.Value(0);

  changeWidth(toValue) {
    Animated.timing(this.translateX, {
      timing: 200,
      useNativeDriver: true,
      toValue
    }).start();
  }

  componentWillReceiveProps(props) {
    const render = props.render;
    if (render) {
      this.setState({ render });
      this.changeWidth(0);
    } else {
      this.changeWidth(-600);
      setTimeout(() => {
        this.setState({ render });
      }, 200);
    }
  }

  render() {
    if (!this.state.render) return null;
    return (
      <View>
        <Animated.View
          style={[
            u.white,
            u.shadow,
            u.z1,
            s.container,
            { transform: [{ translateX: this.translateX }] }
          ]}
        >
          {Name()}
        </Animated.View>
        <Cover render={this.state.render} />
      </View>
    );
  }
}

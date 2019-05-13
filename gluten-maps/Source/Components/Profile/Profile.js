import React, { Component } from "react";
import { Animated, View, TouchableOpacity, Text } from "react-native";
import Cover from "../Universal/Cover";
import Name from "./Name";
import ProfileActions from "./ProfileActions";
import s from "../../Styles/ProfileStyles";
import u from "../../Styles/UniversalStyles";
export default class Profile extends Component {
  state = { render: false };

  translateX = new Animated.Value(-300);

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
      this.changeWidth(0);
      this.setState({ render });
    } else {
      this.changeWidth(-300);
      setTimeout(() => {
        this.setState({ render });
      }, 300);
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
          {ProfileActions(this.props.navigation)}
        </Animated.View>
        <Cover render={this.state.render} />
      </View>
    );
  }
}

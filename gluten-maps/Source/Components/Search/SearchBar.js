// This component requires some really weird
// styling for it to render, I don't know why

import React, { Component } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Animated,
  SafeAreaView,
  Text
} from "react-native";
import { Feather } from "@expo/vector-icons";
import u from "../../Styles/UniversalStyles";
import s from "../../Styles/SearchStyles";
import { debounce } from "debounce";
import Cover from "./Cover";
const { height, width } = Dimensions.get("screen");
import R from "../Universal/Round";
export default class SearchBar extends Component {
  state = {
    iconColor: "#a0a0a0",
    items: [],
    blurred: true,
    searchWidth: R(width * 0.8)
  };

  searchTop = new Animated.Value(16);

  changeSearchTop = toValue => {
    Animated.timing(this.searchTop, {
      toValue,
      duration: 400,
      useNativeDriver: true
    }).start();
  };

  focus = () => {
    this.changeSearchIconColor("rgb(83, 204, 151)");
    this.setState({
      blurred: false,
      searchWidth: width
    });
  };

  blur = () => {
    this.setState({
      blurred: true,
      searchWidth: R(width * 0.8)
    });
    this.changeSearchIconColor("#a0a0a0");
    this.input.blur();
  };

  changeSearchIconColor = iconColor => {
    this.setState({
      iconColor
    });
  };

  renderClose = () => {
    if (this.state.iconColor != "#a0a0a0") {
      return (
        <TouchableOpacity
          style={[
            s.close,
            u.white,
            u.shadow,
            u.centerV,
            u.centerH,
            u.abs,
            {
              left: R(width * 0.86)
            }
          ]}
          onPress={() => {
            this.blur();
          }}
        >
          <Feather style={s.closeIcon} name={"x"} color={"#a0a0a0"} size={30} />
        </TouchableOpacity>
      );
    }
    return null;
  };

  componentWillReceiveProps(props) {
    if (!props.showSearch) {
      this.changeSearchTop(-70);
    } else {
      this.changeSearchTop(16);
    }
  }

  render() {
    const halfW = R(width * 0.5);
    return (
      <View style={[u.abs, { zIndex: 2, left: halfW }]}>
        <Animated.View
          style={[
            s.bar,
            u.abs,
            u.white,
            u.centerH,
            u.row,
            u.alignItemsCenter,
            u.shadow,
            u.z1,
            {
              width: this.state.searchWidth,
              transform: [{ translateY: this.searchTop }]
            }
          ]}
        >
          <Feather
            style={s.icon}
            name={"search"}
            color={this.state.iconColor}
            size={30}
          />

          <TextInput
            ref={input => {
              this.input = input;
            }}
            onFocus={() => {
              this.focus();
            }}
            onChangeText={debounce(text => {
              this.query(text);
            }, 300)}
            placeholder={"Search Restaurants"}
            style={s.text}
          />

          {this.renderClose()}
        </Animated.View>

        <Cover offset={-1 * halfW} icon={this.state.iconColor} />
      </View>
    );
  }
}

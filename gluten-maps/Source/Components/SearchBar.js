import React, { Component } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Animated
} from "react-native";
import { Feather } from "@expo/vector-icons";
import u from "../Styles/UniversalStyles";
import s from "../Styles/SearchStyles";
import { debounce } from "debounce";

const { width } = Dimensions.get("screen");
const blurWidth = Math.round(width * 0.8);
export default class SearchBar extends Component {
  state = {
    iconColor: "#a0a0a0"
  };

  query = text => {
    console.log(text);
  };

  searchWidth = new Animated.Value(blurWidth);

  focus = () => {
    this.changeSearchWidth(width);
    this.changeSearchIconColor("rgb(171, 215, 195)");
  };

  blur = () => {
    this.input.blur();
    this.changeSearchWidth(blurWidth);
    this.changeSearchIconColor("#a0a0a0");
  };

  changeSearchWidth = toValue => {
    Animated.timing(this.searchWidth, {
      toValue: toValue,
      duration: 400
    }).start();
  };

  changeSearchIconColor = color => {
    this.setState({
      iconColor: color
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
            { left: Math.round(width * 0.36) }
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

  render() {
    return (
      <Animated.View
        style={[
          s.bar,
          u.abs,
          u.white,
          u.centerH,
          u.row,
          u.alignItemsCenter,
          u.shadow,
          { width: this.searchWidth }
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            this.input.focus();
          }}
          activeOpacity={1}
        >
          <Feather
            style={s.icon}
            name={"search"}
            color={this.state.iconColor}
            size={30}
          />
        </TouchableOpacity>
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
    );
  }
}

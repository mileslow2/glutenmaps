// This component requires some really weird
// styling for it to render, I don't know why

import React, { Component } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Animated,
  SafeAreaView
} from "react-native";
import { Feather } from "@expo/vector-icons";
import u from "../Styles/UniversalStyles";
import s from "../Styles/SearchStyles";
import { debounce } from "debounce";
import Cover from "./Cover";

const { width } = Dimensions.get("screen");
const blurWidth = Math.round(width * 0.8);
export default class SearchBar extends Component {
  state = {
    iconColor: "#a0a0a0",
    items: []
  };

  query = text => {
    // const restaurants = this.props.restaurants;
    // var newRestaurants = [];
    // for (var i = 0; i < restaurants.length; i++) {
    //     restaurants[i] = restaurants[i].name;
    //     console.log(" ");
    //     console.log(restaurants[i]);
    //     console.log(restaurants[i].includes(text));
    //     // if (restaurants[i].includes(text)) newRestaurants.push(restaurants[i]);
    //   }
    // }
    // console.log(newRestaurants);
  };

  searchWidth = new Animated.Value(blurWidth);

  focus = () => {
    this.changeSearchWidth(width);
    this.changeSearchIconColor("rgb(83, 204, 151)");
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
            u.abs,
            { left: Math.round(width * 0.86) }
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
    if (!this.props.showSearch) return null;
    const halfW = Math.round(width * 0.5);
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
            { width: this.searchWidth }
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

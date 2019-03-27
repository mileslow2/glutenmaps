import React, { Component } from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import u from "../Styles/UniversalStyles";
import s from "../Styles/SearchStyles";
export default class SearchBar extends Component {
  render() {
    return (
      <View
        style={[
          s.bar,
          u.abs,
          u.white,
          u.centerH,
          u.row,
          u.alignItemsCenter,
          u.shadow
        ]}
      >
        <Feather style={s.icon} name={"search"} color={"#a0a0a0"} size={30} />
        <Text
        style={s.text}
        >Search Restaurants</Text>
      </View>
    );
  }
}

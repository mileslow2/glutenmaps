import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import {s.info, s.paddingLeft, s.textColor} from "../../Styles/RestaurantStyles";
export default class Reviews extends Component {
  render() {
    return <View >
      <Text
        style={[s.largeText, s.paddingLeft, s.textColor, { marginTop: -5 }]}
      >
        Reviews
      </Text>
    </View>;
  }
}

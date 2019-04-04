import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import s from "../../Styles/ReviewStyles";
import u from "../../Styles/UniversalStyles";
export default class Reviews extends Component {
  render() {
    return (
      <View style={s.offset}>
        <View style={[u.row]}>
          <Text style={s.header}>Reviews</Text>
          <TouchableOpacity style={[s.button]}>
            <Text
              style={[u.abs, u.centerV, u.centerH, u.textWhite, s.buttonText]}
            >
              Write a review
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

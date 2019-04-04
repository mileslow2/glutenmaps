import React, { Component } from "react";
import { View, TouchableOpacity, Flatlist, Text } from "react-native";
import s from "../../Styles/RestaurantStyles";
import u from "../../Styles/UniversalStyles";

export default class Action extends Component {



  keyExtractor = item => item.action;

  renderItem = ({ item }) => {
    return (

    );
  };

  render() {
    const data = [
      {
        action: "View menu",
        other: "Gluten-Free menu"
      },
      {
        action: "View hours",
        other: this.props.data.opening_hours
      },
      {

      }

    ]
    return (
      <View>
        <Flatlist scrollEnabled={false} />
      </View>
    );
  }
}

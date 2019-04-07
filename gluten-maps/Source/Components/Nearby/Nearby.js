import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import s from "../../Styles/NearbyStyles";
import u from "../../Styles/UniversalStyles";
import NearbyList from "./NearbyList";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Store } from "../../Redux";

export default class Nearby extends Component {
  render() {
    renderFilter = this.props.toggled ? (
      <TouchableOpacity style={[u.shadow, s.filterButton, u.white, u.abs]}>
        <MaterialCommunityIcons
          name={"filter-variant"}
          size={30}
          color={"#cbcbcb"}
          style={s.filterButtonIcon}
        />
      </TouchableOpacity>
    ) : null;
    return (
      <View style={{ height: this.props.correctHeight }}>
        <Text style={s.text}>Nearby Restaurants</Text>
        {renderFilter}
        <NearbyList loc={this.props.loc} restaurants={this.props.restaurants} />
      </View>
    );
  }
}

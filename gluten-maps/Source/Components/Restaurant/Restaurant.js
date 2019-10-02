import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import s from "../../Styles/RestaurantStyles";
import u from "../../Styles/UniversalStyles";
import RenderRating from "../Universal/StarRating";
import Reviews from "../Review/Reviews";
import Actions from "./Actions";
export default class Restaurant extends Component {
  render() {
    if (this.props.data == undefined) return null;
    return (
      <View>
        <Text style={[s.paddingLeft, s.textColor, s.largeText, s.title]}>
          {this.props.data.name}
        </Text>
        <View style={[s.starContainer, u.abs, s.paddingLeft]}>
          {RenderRating(this.props.data.rating, s.star.height)}
        </View>
        <Text style={[s.info, s.paddingLeft, s.textColor]}>
          We haven't been able to enable the reviews to be working yet
        </Text>
        <View style={[s.smallerScreenSpacer, u.fullW]} />
        <Reviews />
        <Actions data={this.props.data} />
      </View>
    );
  }
}

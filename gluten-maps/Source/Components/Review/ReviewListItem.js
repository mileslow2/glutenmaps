import React, { Component } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import RenderRating from "../Universal/StarRating";
import s from "../../Styles/ReviewStyles";
import u from "../../Styles/UniversalStyles";

export default class ReviewListItem extends Component {
  render() {
    return (
      <View style={[s.reviewListItem, u.shadow, u.white]}>
        <View style={u.row}>
          <Text style={s.name}>{this.props.item.name}</Text>
          <View style={s.itemRating}>
            {RenderRating(this.props.item.rating, s.star.width)}
          </View>
          <View style={{ flex: 1 }} />
        </View>
        <View style={s.itemOffset}>
          <Text style={s.review}>{this.props.item.review}</Text>
          <Text style={[s.tapMore, u.centerH]}>Tap for more</Text>
        </View>
      </View>
    );
  }
}

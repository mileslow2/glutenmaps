import React, { Component } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import s from "../../Styles/ReviewStyles";
import u from "../../Styles/UniversalStyles";
import StarRating from "react-native-star-rating";
import ReviewListItem from "./ReviewListItem";
export default class ReviewList extends Component {
  keyExtractor = item => item.name;

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <ReviewListItem item={item} />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <FlatList
        style={[s.reviewListContainer, u.white]}
        horizontal={true}
        data={this.props.data}
        keyExtractor={this.keyExtractor}
        showsHorizontalScrollIndicator={false}
        renderItem={this.renderItem}
      />
    );
  }
}

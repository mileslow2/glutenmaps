import React, { Component } from "react";
import { View, TouchableOpacity, Text, FlatList } from "react-native";
import s from "../../Styles/ReviewStyles";
import u from "../../Styles/UniversalStyles";
import StarRating from "react-native-star-rating";

export default class ReviewListItem extends Component {
  render() {
    return (
      <View style={[s.reviewListItem, u.shadow, u.white]}>
        <View style={u.row}>
          <Text style={s.name}>{this.props.item.name}</Text>
          <View style={s.itemRating}>
            <StarRating
              style={[u.abs]}
              disabled={false}
              emptyStar={"ios-star-outline"}
              fullStar={"ios-star"}
              halfStar={"ios-star-half"}
              iconSet={"Ionicons"}
              maxStars={5}
              rating={this.props.item.rating}
              fullStarColor={"rgb(83, 204, 151)"}
              halfStarColor={"rgb(83, 204, 151)"}
              emptyStarColor={"rgb(83, 204, 151)"}
              starSize={20}
            />
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

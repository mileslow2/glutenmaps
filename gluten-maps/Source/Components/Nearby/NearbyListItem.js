import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import StarRating from "react-native-star-rating";
import GetImage from "../../Fetchers/GetImage";
import s from "../../Styles/NearbyStyles";

export default class NearbyListItem extends Component {
  renderStars = rating => {
    return (
      <StarRating
        style={s.stars}
        disabled={false}
        emptyStar={"ios-star-outline"}
        fullStar={"ios-star"}
        halfStar={"ios-star-half"}
        iconSet={"Ionicons"}
        maxStars={5}
        rating={rating}
        fullStarColor={"rgb(83, 204, 151)"}
        halfStarColor={"rgb(83, 204, 151)"}
        emptyStarColor={"rgb(83, 204, 151)"}
        starSize={27}
      />
    );
  };

  render() {
    const item = this.props.item;
    return (
      <TouchableOpacity
        style={[u.row, s.itemContainer, u.fullW, u.shadow, u.white]}
      >
        <View style={[s.shadowCover, u.white, u.fullW, u.abs]} />
        <Image
          source={{ uri: GetImage(item.photos[0].photo_reference) }}
          style={[s.listImage, u.shadow]}
        />
        <View style={u.col}>
          <Text style={[s.itemText]}>{item.name}</Text>
          <View style={{ width: 50, left: 12, bottom: 10 }}>
            {this.renderStars(item.rating)}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

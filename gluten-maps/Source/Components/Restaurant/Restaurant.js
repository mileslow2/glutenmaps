import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import s from "../../Styles/RestaurantStyles";
import u from "../../Styles/UniversalStyles";
import StarRating from "react-native-star-rating";
import Reviews from "../Review/Reviews";
import Actions from "./Actions";
export default class Restaurant extends Component {
  render() {
    return (
      <View>
        <Text style={[s.paddingLeft, s.textColor, s.largeText, s.title]}>
          {this.props.data.name}
        </Text>
        <View style={[s.starContainer, u.abs, s.paddingLeft]}>
          <StarRating
            style={u.abs}
            disabled={false}
            emptyStar={"ios-star-outline"}
            fullStar={"ios-star"}
            halfStar={"ios-star-half"}
            iconSet={"Ionicons"}
            maxStars={5}
            activeOpacity={0}
            rating={this.props.data.rating}
            fullStarColor={"rgb(83, 204, 151)"}
            halfStarColor={"rgb(83, 204, 151)"}
            emptyStarColor={"rgb(83, 204, 151)"}
            starSize={s.star.height}
          />
        </View>
        <Text style={[s.info, s.paddingLeft, s.textColor]}>
          Branch of a family-friendly chain offering pizzas, salads & wings,
          plus a gluten-free menu.
        </Text>
        <View style={[s.smallerScreenSpacer, u.fullW]} />
        <Reviews />
        <Actions data={this.props.data} />
      </View>
    );
  }
}

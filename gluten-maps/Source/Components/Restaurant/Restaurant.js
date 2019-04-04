import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import s from "../../Styles/RestaurantStyles";
import u from "../../Styles/UniversalStyles";
import StarRating from "react-native-star-rating";
import Reviews from "../Review/Reviews";
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
            rating={this.props.data.rating}
            fullStarColor={"rgb(168, 214, 194)"}
            halfStarColor={"rgb(168, 214, 194)"}
            emptyStarColor={"rgb(168, 214, 194)"}
            starSize={27}
          />
        </View>
        <Text style={[s.info, s.paddingLeft, s.textColor]}>
          Branch of a family-friendly chain offering pizzas, salads & wings,
          plus a gluten-free menu.
        </Text>
        <Reviews />
      </View>
    );
  }
}

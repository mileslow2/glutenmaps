import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import s from "../../Styles/ReviewStyles";
import u from "../../Styles/UniversalStyles";
import ReviewList from "./ReviewList";
const reviews = [
  {
    name: "Miles Low",
    rating: 4,
    review:
      "This is an example review, we haven't enable the review section yet."
  },
  {
    name: "Alex Solomon",
    rating: 4,
    review:
      "Fresh Brothers pizza they had just opened their third location. At the time the sauce was very good the cheese was excellent and the crust was very acceptable. In the many years since they have . . ."
  }
];
export default class Reviews extends Component {
  renderButton = (
    <TouchableOpacity style={[s.button]}>
      <Text style={[u.abs, u.centerV, u.centerH, u.textWhite, s.buttonText]}>
        Write a review
      </Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <View>
        <View style={[u.row]}>
          <Text style={s.header}>Reviews</Text>
          {this.renderButton}
        </View>
        <ReviewList data={reviews} />
      </View>
    );
  }
}

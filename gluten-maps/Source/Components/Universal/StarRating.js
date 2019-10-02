import React, { Component } from "react";
import StarRating from "react-native-star-rating";

export default function RenderRating(rating, size) {
  return (
    <StarRating
      style={{ position: "absolute" }}
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
      starSize={size}
    />
  );
}

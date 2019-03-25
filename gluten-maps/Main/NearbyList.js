import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import s from "./Styles/NearbyStyles";
import u from "./Styles/UniversalStyles";
import GetImage from "./Fetchers/GetImage";
import GetDistance from "./Fetchers/GetDistance";
import StarRating from "react-native-star-rating";

export default class NearbyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: this.props.restaurants
    };
  }

  async componentWillReceiveProps(props) {
    rests = props.restaurants;
    for (var i = 0; i < rests.length; i++) {
      var dist = await GetDistance(props.loc, rests[i].geometry.location);
      rests[i].dist = dist.rows[0].elements[0].distance.text;
    }
    this.setState({
      restaurants: rests
    });
  }
  keyExtractor = item => item.id;
  renderListItem = ({ item }) => {
    if (item.name.length > 31) {
      // adds ... if title is too long
      item.name = item.name.substring(0, 31) + " ...";
    }
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
            <StarRating
              style={s.stars}
              disabled={false}
              emptyStar={"ios-star-outline"}
              fullStar={"ios-star"}
              halfStar={"ios-star-half"}
              iconSet={"Ionicons"}
              maxStars={5}
              rating={item.rating}
              fullStarColor={"rgb(168, 214, 194)"}
              halfStarColor={"rgb(168, 214, 194)"}
              emptyStarColor={"rgb(168, 214, 194)"}
              starSize={27}
            />
          </View>
        </View>
        <Text style={[s.distanceText, u.abs]}>{item.dist}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    if (this.props.toggled == false) {
      return null;
    }
    return (
        <FlatList
        ListHeaderComponent = {
          <View style={[u.fullW, u.white, {height: 20}]}/>
        }
          data={this.state.restaurants}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderListItem}
        />
    );
  }


}

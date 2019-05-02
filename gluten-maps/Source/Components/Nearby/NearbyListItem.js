import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import RenderRating from "../Universal/StarRating";
import GetImage from "../../Fetchers/GetImage";
import s from "../../Styles/NearbyStyles";
import { Store, FocusChange } from "../../Redux";
export default class NearbyListItem extends React.PureComponent {
  goToRestaurant = () => {
    const payload = {
      location: {
        latitude: this.props.item.geometry.location.lat,
        longitude: this.props.item.geometry.location.lng
      },
      key: this.props.item.key
    };
    FocusChange.dispatch({ type: "update", payload: true });
    Store.dispatch({ type: "update", payload });
  };

  render() {
    const item = this.props.item;
    return (
      <TouchableOpacity
        onPress={this.goToRestaurant}
        style={[u.row, s.itemContainer, u.fullW, u.shadow, u.white]}
      >
        <View style={[s.shadowCover, u.white, u.fullW, u.abs]} />
        {/*<Image
          source={{ uri: GetImage(item.photos[0].photo_reference) }}
          style={[s.listImage, u.shadow]}
        />*/}
        <View style={u.col}>
          <Text style={[s.itemText]}>{item.name}</Text>
          <View style={{ width: 50, left: 12, bottom: 10 }}>
            {RenderRating(item.rating, 27)}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

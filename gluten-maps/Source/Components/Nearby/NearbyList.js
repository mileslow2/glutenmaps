import React, { Component } from "react";
import { View, FlatList } from "react-native";
import u from "../../Styles/UniversalStyles";
import NearbyListItem from "./NearbyListItem";
export default class NearbyList extends Component {

  keyExtractor = item => item.id;

  render() {
    if (this.props.toggled == false) {
      return null;
    }
    return (
        <FlatList
        ListHeaderComponent = {
          <View style={[u.fullW, u.white, {height: 20}]}/>
        }
          data={this.props.restaurants}
          keyExtractor={this.keyExtractor}
          renderItem={NearbyListItem}
        />
    );
  }


}

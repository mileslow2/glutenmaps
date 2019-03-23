import React, { Component } from "react";
import { View, Text } from "react-native";
import s from './Styles/NearbyStyles';
import u from './Styles/UniversalStyles';

export default class Nearby extends Component {
    render() {
      return (
          <View>
        <View style={[s.nearbyContainer, u.shadow, u.abs]}>
            <View
            style={[s.swipeUpper, u.centerH]}
            />
            <Text style={s.text}>Nearby</Text>
        </View>
        <View style={{backgroundColor: "white", height: 20, width: 100+"%", position: "absolute", top: 0}}/>
        </View>
      )
    }
}
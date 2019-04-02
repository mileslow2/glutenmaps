import React, { Component } from "react";
import { View } from "react-native";
import { Store } from "../../Redux";
import Nearby from "../Nearby/Nearby";
import Restaurant from "../Restaurant/Restaurant";

export function decider() {
  const store = Store.getState();
  return store == undefined || typeof store == "boolean" || store.key == -1;
}

export default class Decide extends Component {
  render() {
    const data = this.props.data;
    if (decider()) {
      return (
        <View style={{ height: data.correctHeight }}>
          <Nearby
            restaurants={data.restaurants}
            loc={data.loc}
            correctHeight={data.correctHeight}
            toggled={this.props.nearby}
          />
        </View>
      );
    }
    const store = Store.getState();
    return <Restaurant data={data.restaurants[store.key]} />;
  }
}

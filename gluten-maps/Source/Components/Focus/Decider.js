import React, { Component } from "react";
import { View } from "react-native";
import { Store } from "../../Redux";
import Nearby from "../Nearby/Nearby";
import Restaurant from "../Restaurant/Restaurant";

export default function Decide(data, nearby) {
  const store = Store.getState();
  if (store == undefined || typeof store == "boolean" || store.id == -1) {
    return (
      <View style={{ height: data.correctHeight }}>
        <Nearby
          restaurants={data.restaurants}
          loc={data.loc}
          correctHeight={data.correctHeight}
          toggled={nearby}
        />
      </View>
    );
  }

  return <Restaurant data={data.restaurants[store.id]} />;
}

import React from "react";
import { View, Text } from "react-native";
import s from "../../Styles/ProfileStyles";
import u from "../../Styles/UniversalStyles";
const name = "Miles Low";
export default function Name() {
  return (
    <View style={[u.row, s.nameContainer]}>
      <View style={[s.letterDisk, u.centerV]}>
        <Text style={[s.letter, u.centerH]}>{name.substring(0, 1)}</Text>
      </View>
      <View style={[u.col, u.centerV, s.textContainer]}>
        <Text style={s.name}>{name}</Text>
        <Text style={s.reviewAmount}>0 reviews</Text>
      </View>
    </View>
  );
}

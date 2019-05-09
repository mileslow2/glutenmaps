import React, { Component } from "react";
import { View, TouchableOpacity, Text, FlatList, Share } from "react-native";
import s from "../../Styles/ProfileStyles";
const actionNames = [
  { name: "Share" },
  { name: "My reviews" },
  { name: "Edit account" },
  { name: "Contact" },
  { name: "More" }
];
function share() {
  const content = {
    message: "test",
    title: "yo",
    url: "https://facebook.github.io/react-native/docs/share#docsNav"
  };
  Share.share(content);
}

function functionDecider(name) {
  if (name === "Share") share();
}

const keyExtractor = (item, index) => item.name;

const renderAction = ({ item }) => {
  var textStyle = [s.actionText];
  if (item.name === "Share") textStyle.push(s.shareText);
  return (
    <TouchableOpacity
      onPress={() => {
        functionDecider(item.name);
      }}
    >
      <Text style={textStyle}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default function ProfileActions() {
  return (
    <FlatList
      contentContainerStyle={s.actionContainer}
      data={actionNames}
      keyExtractor={keyExtractor}
      renderItem={renderAction}
      scrollEnabled={false}
    />
  );
}

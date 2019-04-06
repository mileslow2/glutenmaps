import React, { Component } from "react";
import { View, TouchableOpacity, FlatList, Text, Linking } from "react-native";
import s from "../../Styles/RestaurantStyles";
import u from "../../Styles/UniversalStyles";
import GetMoreData from "../../Fetchers/GetMoreData";
import { phonecall } from "react-native-communications";
import openMap from "react-native-open-maps";
import Hours from "./Modal";

export default class Action extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      list: [{ action: "text", other: "text" }],
      visible: false
    };
  }

  async componentWillMount() {
    moreData = await GetMoreData(this.state.data);
    list = this.listifyData(moreData);
    this.setState({
      list: list
    });
  }

  addObj(action, other, func) {
    return {
      action,
      other
    };
  }

  openWebsite = website => {
    Linking.openURL(website);
  };

  listifyData(data) {
    var newArr = [];
    var duration = data.duration;
    duration = duration.substring(0, duration.length - 1);
    duration += " drive";
    newArr.push(this.addObj("Directions", duration));
    newArr.push(this.addObj("View menu", "Gluten-Free menu"));
    const openNow = data.opening_hours.open_now ? "Open now" : "Closed now";
    newArr.push(this.addObj("View hours", openNow));
    newArr.push(this.addObj("Call", data.formatted_phone_number));
    newArr.push(this.addObj("Open", "Website"));
    return newArr;
  }

  keyExtractor = item => item.action;

  decideFunction = action => {
    data = this.state.data;
    if (action == "Open") Linking.openURL(data.website);
    if (action == "Call") {
      phone = data.formatted_phone_number;
      phone = phone.replace("-", "");
      phone = phone.replace("(", "");
      phone = phone.replace(") ", "");
      phonecall(phone, false);
    }
    if (action == "Directions") {
      loc = data.geometry.location;
      openMap({
        latitude: loc.lat,
        longitude: loc.lng,
        query: data.name
      });
    }
    if (action == "View hours") {
      this.setState({
        visible: true
      });
    }
  };

  renderItem = ({ item }) => {
    return (
      <View style={[u.row, s.itemContainer, u.shadow, u.white]}>
        <View style={[s.shadowCover, u.white, u.fullW, u.abs]} />
        <Text style={[s.other, s.textColor]}>{item.other}</Text>
        <TouchableOpacity
          onPress={() => {
            this.decideFunction(item.action);
          }}
          style={s.action}
        >
          <Text
            style={[s.actionText, u.abs, u.centerH, u.centerV, u.textWhite]}
          >
            {item.action}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View>
        <Hours
          visible={this.state.visible}
          data={this.state.data.opening_hours.weekday_text}
        />
        <FlatList
          ListHeaderComponent={
            <View style={[{ height: 10 }, u.white, u.fullW]} />
          }
          scrollEnabled={false}
          data={this.state.list}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

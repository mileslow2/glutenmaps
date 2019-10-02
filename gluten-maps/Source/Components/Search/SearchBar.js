// This component requires some really weird
// styling for it to render, I don't know why

import React, { Component } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Animated,
  Keyboard
} from "react-native";
import { Feather } from "@expo/vector-icons";
import u from "../../Styles/UniversalStyles";
import s from "../../Styles/SearchStyles";
import { debounce } from "debounce";
import Cover from "../Universal/Cover";
import NearbyList from "../Nearby/NearbyList";
import { HamburgerHandler, Store, FocusChange } from "../../Redux";
const { width, height } = Dimensions.get("screen");
import R from "../Universal/Round";

const halfW = R(width * 0.5);

export default class SearchBar extends Component {
  state = {
    iconColor: "#a0a0a0",
    items: [],
    displayedItems: [],
    blurred: true,
    searchWidth: R(width * 0.8),
    keyboardOpen: false
  };

  toggleShow = () => {
    this.setState({
      keyboardOpen: true
    });
  };

  toggleHide = () => {
    this.setState({
      keyboardOpen: false
    });
  };

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this.toggleHide
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this.toggleShow
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  searchTop = new Animated.Value(16);

  changeSearchTop = toValue => {
    Animated.timing(this.searchTop, {
      toValue,
      duration: 400,
      useNativeDriver: true
    }).start();
  };

  focus = () => {
    HamburgerHandler.dispatch({ type: "update", payload: false });
    this.changeSearchIconColor("rgb(83, 204, 151)");
    this.setState({
      blurred: false,
      searchWidth: width
    });
  };

  blur = () => {
    HamburgerHandler.dispatch({ type: "update", payload: true });
    this.setState({
      blurred: true,
      searchWidth: R(width * 0.8),
      displayedItems: this.state.items
    });
    this.input.clear();
    this.changeSearchIconColor("#a0a0a0");
    this.input.blur();
  };

  changeSearchIconColor = iconColor => {
    this.setState({
      iconColor
    });
  };

  query = text => {
    text = text.toLowerCase();
    const items = this.state.items;
    var displayedItems = [];
    var current;
    for (var i = 0; i < items.length; i++) {
      current = items[i].name.toLowerCase();
      if (current.includes(text)) displayedItems.push(items[i]);
    }
    this.setState({
      displayedItems
    });
  };

  renderClose = () => {
    if (this.state.iconColor != "#a0a0a0") {
      return (
        <TouchableOpacity
          style={[
            s.close,
            u.white,
            u.shadow,
            u.centerV,
            u.centerH,
            u.abs,
            {
              left: R(width * 0.86)
            }
          ]}
          onPress={() => {
            this.blur();
          }}
        >
          <Feather style={s.closeIcon} name={"x"} color={"#a0a0a0"} size={30} />
        </TouchableOpacity>
      );
    }
    return null;
  };

  componentWillReceiveProps(props) {
    if (!props.showSearch) {
      this.changeSearchTop(-70);
      this.blur();
    } else this.changeSearchTop(16);
    var items = props.restaurants;
    this.setState({
      items,
      displayedItems: items
    });
  }

  render() {
    const listHeight = !this.state.keyboardOpen ? height / 2 : height * 0.89;
    const list = this.state.blurred ? null : (
      <View style={[u.fullW, u.abs, s.listContainer]}>
        <View style={[u.abs, u.fullW, { top: 40, height: listHeight }]}>
          <NearbyList
            fromSearch={true}
            loc={this.props.loc}
            restaurants={this.state.displayedItems}
          />
        </View>
      </View>
    );
    return (
      <View style={[u.abs, { zIndex: 2, left: halfW }]}>
        <Animated.View
          style={[
            s.bar,
            u.abs,
            u.white,
            u.centerH,
            u.row,
            u.alignItemsCenter,
            u.shadow,
            u.z1,
            {
              width: this.state.searchWidth,
              transform: [{ translateY: this.searchTop }]
            }
          ]}
        >
          <Feather
            style={s.icon}
            name={"search"}
            color={this.state.iconColor}
            size={30}
          />

          <TextInput
            ref={input => {
              this.input = input;
            }}
            onFocus={() => {
              this.focus();
            }}
            onChangeText={debounce(text => {
              this.query(text);
            }, 600)}
            placeholder={"Search Restaurants"}
            style={s.text}
          />
          {list}
          {this.renderClose()}
        </Animated.View>

        <Cover offset={-1 * halfW} icon={this.state.iconColor} render={true} />
      </View>
    );
  }
}

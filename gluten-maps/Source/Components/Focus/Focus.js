import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  PanResponder,
  Dimensions
} from "react-native";
import s from "../../Styles/FocusStyles";
import u from "../../Styles/UniversalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Store } from "../../Redux";
import { debounce } from "debounce";
import Decide, { decider } from "./Decider";
import Nearby from "../Nearby/Nearby";

const { height } = Dimensions.get("screen");

const nearbyHeight =
  height > 736 ? Math.round(height * 0.9) : Math.round(height * 0.95);

const restaurantHeight =
  height > 736 ? Math.round(height * 0.79) : Math.round(height * 0.84);

export default class Focus extends Component {
  constructor() {
    super();
    this.state = {
      focusToggled: false
    };
  }

  upAnim = new Animated.Value(60);

  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      const focusHeight = !this.state.focusToggled ? 60 : nearbyHeight;
      const newValue = focusHeight - gesture.dy;
      this.upAnim.setValue(newValue);
    },
    onPanResponderEnd: (event, gesture) => {
      if (Math.abs(gesture.dy) > 20) {
        this.renderFocus();
      }
    }
  });

  spring = heightTo => {
    Animated.spring(this.upAnim, {
      toValue: heightTo,
      timing: 500,
      friction: 7
    }).start();
  };
  renderFocus = () => {
    if (decider()) {
      const focusHeight = this.state.focusToggled ? 60 : nearbyHeight;
      this.spring(focusHeight);
      this.changeToggle();
      Store.dispatch({ type: "update", payload: this.state.focusToggled });
    } else if (!this.state.focusToggled) {
      this.spring(restaurantHeight);
      this.changeToggle();
    } else {
      const store = Store.getState();
      var payload = {
        location: store.location,
        key: -1
      };
      payload.location.latitude += 0.0057;
      Store.dispatch({ type: "update", payload: payload });
      this.changeToggle();
      this.spring(60);
    }
  };

  changeToggle = () => {
    this.setState({
      focusToggled: !this.state.focusToggled
    });
  };

  removeShadow = () => {
    if (this.state.focusToggled && decider()) return null;
    return <View style={[s.removeShadow, u.abs, u.white, u.z1]} />;
  };

  packageDecider = () => {
    const data = {
      correctHeight: nearbyHeight,
      restaurants: this.props.restaurants,
      loc: this.props.loc
    };
    const toggled = this.state.focusToggled;
    return <Decide data={data} toggled={toggled} />;
    Decide(data, toggled);
  };

  checkPage = () => {
    return this.props.currentMarker == -1;
  };

  componentWillMount() {
    let int = setInterval(() => {
      if (!this.checkPage() && !this.state.focusToggled) {
        this.renderFocus();
      }
    }, 200);
  }

  componentWillUnMount() {
    clearInterval(int);
  }

  render() {
    return (
      <View>
        <Animated.View
          style={[s.focusContainer, u.abs, { height: this.upAnim }]}
        >
          <View
            {...this.panResponder.panHandlers}
            style={[u.fullW, u.white, u.shadow, s.bottomHeaderBody]}
          >
            <View style={[s.swipeUpper, u.centerH]} />
            {this.removeShadow()}
            {this.packageDecider()}
          </View>
        </Animated.View>
      </View>
    );
  }
}

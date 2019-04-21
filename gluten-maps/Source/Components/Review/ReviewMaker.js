import React, { Component } from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions
} from "react-native";
import s from "../../Styles/ReviewStyles";
import u from "../../Styles/UniversalStyles";

const { width, height } = Dimensions.get("screen");

export default class ReviewMaker extends Component {
  state = {
    visible: false
  };

  componentWillReceiveProps(props) {
    console.log("hello");
    this.setState({
      visible: props.visible
    });
  }

  render() {
    return (
      <Modal
        visible={this.state.visible}
        hardwareAccelerated={true}
        fullScreen={true}
      >
        <View style={[{ width, height }, u.fullW]}>
          <TextInput />
        </View>
      </Modal>
    );
  }
}

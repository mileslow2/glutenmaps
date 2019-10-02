import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  Dimensions,
  FlatList
} from "react-native";
import s from "../../Styles/ModalStyles";
import u from "../../Styles/UniversalStyles";
export default class Hours extends Component {
  state = {
    visible: false
  };

  componentWillReceiveProps(props) {
    this.setState({
      visible: props.visible
    });
  }
  keyExtractor = item => item;

  renderItem = ({ item }) => {
    sub = item.substring(0, 1);
    if (sub == "W") {
      item = item.replace(": ", ":\t");
    } else if (sub == "F") {
      item = item.replace(": ", ": \t\t\t");
    } else {
      item = item.replace(": ", ":  \t\t");
    }
    item = item.replace(" A", "A");
    item = item.replace(" P", "P");
    return <Text style={[s.hoursText, s.textColor]}>{item}</Text>;
  };

  render() {
    return (
      <Modal
        visible={this.state.visible}
        hardwareAccelerated={true}
        animationType={"slide"}
        transparent={true}
      >
        <TouchableOpacity
          onPress={() => {
            this.setState({
              visible: false
            });
          }}
          style={[s.screenCover, u.abs]}
        />
        <FlatList
          ListHeaderComponent={<Text style={s.modalHeader}>Hours</Text>}
          style={[s.hoursContainer, u.abs, u.white, u.shadow, u.centerH]}
          scrollEnabled={false}
          data={this.props.data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </Modal>
    );
  }
}

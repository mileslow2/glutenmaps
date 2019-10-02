import React, { Component } from "react";
import { View, TouchableOpacity, Text, TextInput, Alert } from "react-native";
import GetUserData from "../../Fetchers/GetUserData";
import ModifyUser from "../../Fetchers/ModifyUser";
import u from "../../Styles/UniversalStyles";
import s from "./NewUserStyles";

export default class EditUser extends Component {
  static navigationOptions = {
    title: "Edit account"
  };

  state = {
    email: "",
    full_name: "",
    original: {
      email: null,
      full_name: null
    }
  };

  async componentDidMount() {
    const user = await GetUserData();
    const email = user.email;
    const full_name = user.full_name;
    this.setState({
      email,
      full_name,
      original: user
    });
  }
  confirmPassword = confirmedPassword => {
    this.setState({
      confirmedPassword
    });
  };

  setPassword = password => {
    this.setState({
      password
    });
  };
  setEmail = email => {
    this.setState({
      email
    });
  };

  setName = full_name => {
    this.setState({
      full_name
    });
  };

  confirmPassword = confirmedPassword => {
    this.setState({
      confirmedPassword
    });
  };

  modifyAccount = async () => {
    const body = {
      email: this.state.email,
      full_name: this.state.full_name,
      password: this.state.confirmedPassword
    };
    const modified = await ModifyUser(body);
    if (!modified) Alert.alert("Your password is incorrect");
    else
      Alert.alert("Success", "", [
        {
          text: "OK",
          onPress: () => this.props.navigation.navigate("Navigation")
        }
      ]);
  };

  render() {
    const renderModify =
      this.state.email !== this.state.original.email ||
      this.state.full_name !== this.state.original.full_name;
    const modify = renderModify ? (
      <View>
        <Text style={s.fieldHeader}>Confirm password</Text>
        <View style={s.fieldContainer}>
          <TextInput
            style={[u.shadow, u.white, s.field]}
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={this.confirmPassword}
            autoCapitalize={"none"}
          />
        </View>
        <TouchableOpacity
          style={[u.shadow, u.centerV, s.loginButton]}
          onPress={this.modifyAccount}
        >
          <Text style={[u.textWhite, u.centerH, s.buttonText]}>Modify</Text>
        </TouchableOpacity>
      </View>
    ) : null;
    return (
      <View style={[u.centerH, s.editOffset]}>
        <View style={s.fieldContainer}>
          <Text style={s.fieldHeader}>Full Name</Text>
          <TextInput
            value={this.state.full_name}
            style={[u.shadow, u.white, s.field]}
            autoCorrect={false}
            onChangeText={this.setName}
            autoCapitalize={"none"}
          />
        </View>
        <View style={s.fieldContainer}>
          <Text style={s.fieldHeader}>Email</Text>
          <TextInput
            value={this.state.email}
            style={[u.shadow, u.white, s.field]}
            autoCorrect={false}
            onChangeText={this.setEmail}
            autoCapitalize={"none"}
          />
        </View>
        {modify}
      </View>
    );
  }
}

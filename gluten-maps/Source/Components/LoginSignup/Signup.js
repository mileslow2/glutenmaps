import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Button,
  Alert
} from "react-native";
import Register from "../../Fetchers/Register";
import u from "../../Styles/UniversalStyles";
import s from "./NewUserStyles";

export default class Signup extends Component {
  state = {
    email: "mileslow4@gmail.com",
    password: "123",
    fullName: "minger tinger",
    confirmedPassword: "123"
  };

  credentialsFull() {
    const credentials = this.state;
    const arr = Object.values(credentials);
    for (i of arr) if (i === " ") return false;
    return true;
  }

  passwordsEqual() {
    const password = this.state.password;
    const confirmedPassword = this.state.confirmedPassword;
    return password === confirmedPassword;
  }

  onlyTwoNames() {
    const fullName = this.state.fullName;
    var spaceAmount = 0;
    for (var i = 0; i < fullName.length; i++)
      if (fullName[i] === " ") spaceAmount++;
    if (spaceAmount == 0 || spaceAmount > 1) return false;
    return true;
  }

  navigate(place) {
    this.props.navigation.navigate(place);
  }

  setEmail = email => {
    this.setState({
      email
    });
  };

  setPassword = password => {
    this.setState({
      password
    });
  };

  setName = fullName => {
    this.setState({
      fullName
    });
  };

  confirmPassword = confirmedPassword => {
    this.setState({
      confirmedPassword
    });
  };

  attemptSignup = async () => {
    var alertMessage;
    const onlyTwoNames = this.onlyTwoNames();
    if (!onlyTwoNames)
      alertMessage = "You can only input your first and last name";
    const passwordsEqual = this.passwordsEqual();
    if (!passwordsEqual) alertMessage = "Your passwords must be equal";
    credentialsFull = this.credentialsFull();
    if (!credentialsFull) alertMessage = "You must fill in all the forms";
    const valid = passwordsEqual && credentialsFull && onlyTwoNames;
    if (valid) {
      const registered = Register(this.state);
      if (registered) this.navigate("Navigation");
      else Alert.alert("That email was already taken.");
    } else Alert.alert(alertMessage);
  };

  render() {
    return (
      <View>
        <View style={[u.centerH, s.signUpOffset]}>
          <View style={s.fieldContainer}>
            <Text style={s.fieldHeader}>First and Last Name</Text>
            <TextInput
              style={[u.shadow, u.white, s.field]}
              onChangeText={this.setName}
              autoCapitalize={"none"}
              autoCorrect={false}
              autoFocus={true}
            />
          </View>
          <View style={s.fieldContainer}>
            <Text style={s.fieldHeader}>Email</Text>
            <TextInput
              style={[u.shadow, u.white, s.field]}
              onChangeText={this.setEmail}
              autoCapitalize={"none"}
              autoCorrect={false}
              autoFocus={true}
            />
          </View>
          <View style={s.fieldContainer}>
            <Text style={s.fieldHeader}>Password</Text>
            <TextInput
              style={[u.shadow, u.white, s.field]}
              secureTextEntry={true}
              autoCorrect={false}
              onChangeText={this.setPassword}
              autoCapitalize={"none"}
            />
          </View>
          <View style={s.fieldContainer}>
            <Text style={s.fieldHeader}>Confirm Password</Text>
            <TextInput
              style={[u.shadow, u.white, s.field]}
              secureTextEntry={true}
              autoCorrect={false}
              onChangeText={this.confirmPassword}
              autoCapitalize={"none"}
            />
          </View>
          <TouchableOpacity
            style={[u.shadow, u.centerV, s.loginButton]}
            onPress={this.attemptSignup}
          >
            <Text style={[u.textWhite, u.centerH, s.buttonText]}>Sign Up</Text>
          </TouchableOpacity>
          <Button
            title="Already have an account? Login"
            onPress={() => {
              this.navigate("NewUser");
            }}
          />
        </View>
      </View>
    );
  }
}

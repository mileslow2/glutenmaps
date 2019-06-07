import React, { Component } from "react";
import VerifyUser from "../../Fetchers/VerifyUser";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Button,
  Alert
} from "react-native";
import { SecureStore } from "expo";
import u from "../../Styles/UniversalStyles";
import s from "./NewUserStyles";

export default class NewUser extends Component {
  state = {
    email: "",
    password: ""
  };

  navigate(place) {
    this.props.navigation.navigate(place);
  }

  async verifyLogin() {
    const verified = await VerifyUser();
    if (verified) this.navigate("Navigation");
    const passwordFull = this.state.password !== "";
    const emailFull = this.state.email !== "";
    const stateFull = passwordFull && emailFull;
    if (!verified && stateFull) Alert.alert("Email or Password is incorrect");
  }

  async componentWillMount() {
    await this.verifyLogin();
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

  attemptLogin = async () => {
    const email = this.state.email;
    const password = this.state.password;
    const credentialsEntered = email != null || password != null;
    if (credentialsEntered) {
      await SecureStore.setItemAsync("email", email);
      await SecureStore.setItemAsync("password", password);
      this.navigate("Navigation");
    }
  };

  render() {
    return (
      <View style={[u.centerH, s.offset]}>
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
        <TouchableOpacity
          style={[u.shadow, u.centerV, s.loginButton]}
          onPress={this.attemptLogin}
        >
          <Text style={[u.textWhite, u.centerH, s.buttonText]}>Login</Text>
        </TouchableOpacity>
        <Button
          title="Sign up"
          onPress={() => {
            this.navigate("Signup");
          }}
        />
      </View>
    );
  }
}

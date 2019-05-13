import React, { Component } from "react";
import Navigation from "./Source/Navigation";
import NewUser from "./Source/Components/LoginSignup/NewUser";
import Signup from "./Source/Components/LoginSignup/Signup";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

const MainNav = createSwitchNavigator({
  NewUser,
  Signup,
  Navigation
});

const MainContainer = createAppContainer(MainNav);

export default class App extends Component {
  render() {
    return <MainContainer />;
  }
}

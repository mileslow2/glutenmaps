import React,
{
    Component
}
from "react";
import Navigation from "./Source/Navigation";
import NewUser from "./Source/Components/LoginSignup/NewUser";
import Signup from "./Source/Components/LoginSignup/Signup";
import EditUser from "./Source/Components/LoginSignup/EditUser";
import NavigationService from "./NavigationService";
import
{
    createSwitchNavigator,
    createAppContainer,
    createStackNavigator
}
from "react-navigation";

const stackNav = createStackNavigator(
{
    // EditUser,
    Navigation
});

const MainNav = createSwitchNavigator(
{
    NewUser,
    stackNav,
    Signup
});

const MainContainer = createAppContainer(MainNav);

export default class App extends Component
{
    render()
    {
        return <Navigation / > ;
    }
}
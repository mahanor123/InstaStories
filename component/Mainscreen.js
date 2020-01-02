import React, { Component } from "react";
import { Icon } from "native-base";
import Homepage from "./home";
import Searchpage from "./search";
import Profilepage from "./profile";

import { createAppContainer } from "react-navigation";
import {
  createBottomTabNavigator,
  MaterialTopTabBar
} from "react-navigation-tabs";

class Mainpage extends Component {
  static navigationOptions = {
    headerLeft: <Icon name="ios-camera" style={{ paddingLeft: 10 }} />,
    title: "Instagram",
    headerRight: <Icon name="ios-send" style={{ paddingRight: 10 }} />
  };
  render() {
    return (
      <AppTabNavigator />
    );
  }
}



const AppTabNavigator = createBottomTabNavigator({
  Home: { screen: Homepage },
  Search: { screen: Searchpage },
  Profile: { screen: Profilepage }
});

export default createAppContainer(AppTabNavigator);


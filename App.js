import React from "react";
import Mainpage from "./component/Mainscreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

function App() {
  return (
    <AppStackNavigator />
  );
}
const AppStackNavigator = createStackNavigator({
  Main: {
    screen: Mainpage
  }
});

export default createAppContainer(AppStackNavigator);

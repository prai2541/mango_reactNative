import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as widget from "react-native-elements";
import MainMenu from "./Screens/main_menu";
import HistList from "./hist.js";
import { createStackNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator({
  Home: MainMenu,
  hist: HistList
});

const AppContainer = createAppContainer(MainNavigator);

class App extends Component {
  state = {};
  render() {
    return <AppContainer />;
  }
}

export default App;

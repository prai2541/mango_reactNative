import React, { Component } from "react";
import MainMenu from "./Screens/main_menu";
import HistoryLists from "./Screens/history_lists";
import { createStackNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator({
  Home: MainMenu,
  hist: HistoryLists
});

const AppContainer = createAppContainer(MainNavigator);

class App extends Component {
  state = {};

  render() {
    return <AppContainer />;
  }
}

export default App;

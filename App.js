import React, { Component } from "react";
import MainMenu from "./Screens/main_menu";
import HistoryLists from "./Screens/history_lists";
import { createStackNavigator, createAppContainer } from "react-navigation";
import TodayLists from "./Screens/today_lists";
import Supervisor from "./Screens/supervisor";

const MainNavigator = createStackNavigator(
  {
    Home: MainMenu,
    hist: HistoryLists,
    supervisor: Supervisor
  },
  {
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "teal" },
      headerTintColor: "white"
    }
  }
);

const AppContainer = createAppContainer(MainNavigator);

class App extends Component {
  state = {};

  render() {
    return <AppContainer />;
  }
}

export default App;

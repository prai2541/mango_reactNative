import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";
import React, { Component } from "react";
import TodayLists from "../Screens/today_lists";
import NextDayList from "../Screens/nextday_lists";

const TabNavigator = createMaterialTopTabNavigator(
  {
    Today: TodayLists,
    "Next Day": NextDayList
  },
  {
    tabBarOptions: {
      activeBackgroundColor: "white",
      activeTintColor: "white",
      upperCaseLabel: false,
      inactiveBackgroundColor: "#fff",
      style: {
        backgroundColor: "teal"
      },
      indicatorStyle: {
        backgroundColor: "white"
      },
      labelStyle: {
        fontSize: 14
      }
    }
  }
);

const AppContainer = createAppContainer(TabNavigator);

class Supervisor extends Component {
  static navigationOptions = { title: "Supervisor" };
  render() {
    return <AppContainer />;
  }
}

export default Supervisor;

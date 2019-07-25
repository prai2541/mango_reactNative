import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import MainMenu from "./Screens/main_menu";
import HistoryLists from "./Screens/history_lists";
import { createStackNavigator, createAppContainer } from "react-navigation";
import TodayLists from "./Screens/today_lists";
import Supervisor from "./Screens/supervisor";
import Images from "./Screens/images";

const MainNavigator = createStackNavigator(
  {
    Home: MainMenu,
    hist: HistoryLists,
    supervisor: Supervisor,
    images: Images
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "orange",
        borderBottomColor: "transparent"
      },
      headerTintColor: "white",
      headerRight: (
        <View style={{ paddingRight: 15 }}>
          <Button
            title="Log Out"
            titleStyle={{
              color: "orange",
              fontSize: 14,
              paddingHorizontal: 10
            }}
            onPress={() => [console.log("asd")]}
            buttonStyle={{
              backgroundColor: "#fff",
              borderRadius: 20,
              padding: 5
            }}
          />
        </View>
      )
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

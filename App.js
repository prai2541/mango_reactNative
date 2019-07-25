import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import MainMenu from "./Screens/main_menu";
import HistoryLists from "./Screens/history_lists";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Supervisor from "./Screens/supervisor";
import Images from "./Screens/images";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Root } from "native-base";

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
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Root>
        <AppContainer />
      </Root>
    );
  }
}

export default App;

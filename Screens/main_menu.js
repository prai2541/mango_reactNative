import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as widget from "react-native-elements";
import Checkin from "../Components/checkin_button";
import Logout from "../Components/logout-button";
import CustomButton from "../Components/custom_button";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class MainMenu extends React.Component {
  static navigationOptions = {
    header: null
  };
  //const {navigate} = this.props.navigation;
  handleOnClick = text => {
    console.log(text);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.help}>
          <Text style={{ fontSize: 30 }}>OutSource</Text>
          <Logout />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Checkin />
          <View style={{ height: 50 }} />
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <CustomButton
              title="แจ้งขอลา"
              onClick={() => this.props.navigation.push("supervisor")}
            />
            <View style={{ width: 20 }} />
            <CustomButton
              title="ประวัติการเข้างาน"
              onClick={() => this.props.navigation.push("hist")}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: 'center',
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  help: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 20,
    marginTop: 20
  },
  logout: {
    backgroundColor: "#46b5a6"
  },
  checkin: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 200,
    borderRadius: 400,
    backgroundColor: "#46b5a6"
  },
  twobutton: {
    padding: 5,
    borderRadius: 35,
    borderColor: "#46b5a6",
    borderWidth: 1,
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
    //flex: 1
  }
});

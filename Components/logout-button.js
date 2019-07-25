import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";

class LogoutButton extends Component {
  state = {};
  render() {
    return (
      <Button
        title="Log Out"
        titleStyle={{
          color: "white",
          fontSize: 14,
          paddingHorizontal: 10
        }}
        onPress={() => [console.log("asd")]}
        buttonStyle={{
          backgroundColor: "orange",
          borderRadius: 20,
          padding: 5
        }}
      />
    );
  }
}

export default LogoutButton;

import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as widget from "react-native-elements";
import { createStackNavigator, createAppContainer } from "react-navigation";

class LogoutButton extends Component {
  state = {};
  render() {
    return (
      <View style={styles.help}>
        <widget.Button title="Log Out" buttonStyle={styles.logout} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  logout: {
    backgroundColor: "#46b5a6"
  }
});

export default LogoutButton;

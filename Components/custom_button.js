import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as widget from "react-native-elements";
import { createStackNavigator, createAppContainer } from "react-navigation";

class CustomButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onClick}>
        <View style={styles.twobutton}>
          <Text style={{ fontSize: 16, color: "orange" }}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  twobutton: {
    padding: 5,
    borderRadius: 35,
    borderColor: "orange",
    borderWidth: 1,
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
    //flex: 1
  }
});

export default CustomButton;

import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as widget from "react-native-elements";
import { createStackNavigator, createAppContainer } from "react-navigation";

class CheckinButton extends Component {
  state = {};
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            console.log("test");
          }}
        >
          <View style={styles.checkin}>
            <Text style={{ fontSize: 40, color: "#fff" }}>Check In</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  checkin: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 200,
    borderRadius: 400,
    backgroundColor: "orange"
  }
});

export default CheckinButton;

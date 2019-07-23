import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as widget from "react-native-elements";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HistoryList extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onClick}>
        <widget.Card containerStyle={{ borderRadius: 10 }}>
          <Text style={{ color: "black" }}>{this.props.data.date}</Text>
          <Text style={{ color: "black" }}>{this.props.data.loc}</Text>
          <Text style={{ color: "black" }}>{this.props.data.time}</Text>
        </widget.Card>
      </TouchableOpacity>
    );
  }
}

export default HistoryList;

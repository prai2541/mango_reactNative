import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView
} from "react-native";
import * as widget from "react-native-elements";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HistoryList extends Component {
  render() {
    return (
      <widget.Card containerStyle={{ borderRadius: 10 }}>
        <TouchableWithoutFeedback
          onPress={() => this.props.onClick(this.props.data.date)}
        >
          <View>
            <Text style={{ color: "orange", fontSize: 16 }}>
              {this.props.data.date}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 12, color: "grey" }}>
                Check In :{" "}
                <Text style={{ fontWeight: "bold" }}>
                  {this.props.data.checkin}
                </Text>
              </Text>
              <Text style={{ marginLeft: 15, fontSize: 12, color: "grey" }}>
                Check Out :{" "}
                <Text style={{ fontWeight: "bold" }}>
                  {this.props.data.checkout}
                </Text>
              </Text>
            </View>
            <Text style={{ fontSize: 12 }}>
              Store :{" "}
              <Text style={{ fontWeight: "bold" }}>
                {this.props.data.store}
              </Text>
            </Text>
            <Text style={{ fontSize: 12 }}>
              Province :{" "}
              <Text style={{ fontWeight: "bold" }}>
                {this.props.data.province}
              </Text>
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <widget.Button
                title="รูปภาพ"
                type="outline"
                buttonStyle={{
                  borderColor: "orange",
                  borderRadius: 20,
                  borderWidth: 2,
                  paddingTop: 3,
                  paddingBottom: 5,
                  paddingHorizontal: 15
                }}
                titleStyle={{ color: "orange", fontSize: 12 }}
              />
              <widget.Button
                title={
                  this.props.data.approved ? "อนุมัติแล้ว" : "ยังไม่อนุมัติ"
                }
                type="solid"
                buttonStyle={{
                  marginLeft: 10,
                  borderColor: "white",
                  backgroundColor: "orange",
                  borderRadius: 20,
                  borderWidth: 2,
                  paddingTop: 3,
                  paddingBottom: 5,
                  paddingHorizontal: 15
                }}
                titleStyle={{ color: "white", fontSize: 12 }}
                TouchableComponent={TouchableWithoutFeedback}
                // disabled={true}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </widget.Card>
    );
  }
}

export default HistoryList;

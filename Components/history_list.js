import React, { Component } from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import { Card, Button } from "react-native-elements";

class HistoryList extends Component {
  render() {
    return (
      <Card containerStyle={{ borderRadius: 10 }}>
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
            <Text style={{ fontWeight: "bold" }}>{this.props.data.store}</Text>
          </Text>
          <Text style={{ fontSize: 12 }}>
            Province :{" "}
            <Text style={{ fontWeight: "bold" }}>
              {this.props.data.province}
            </Text>
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Button
              onPress={this.props.onPhotoClick}
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
            <Button
              title={this.props.data.approved ? "อนุมัติแล้ว" : "ยังไม่อนุมัติ"}
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
      </Card>
    );
  }
}

export default HistoryList;

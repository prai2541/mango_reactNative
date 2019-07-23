import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import * as widget from "react-native-elements";

class NextDayList extends Component {
  render() {
    return (
      <widget.Card containerStyle={{ borderRadius: 10 }}>
        <TouchableWithoutFeedback>
          <View style={{ flexDirection: "row" }}>
            <widget.Image
              source={{ uri: "https://picsum.photos/200" }}
              style={styles.image}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={styles.name}>{this.props.data.name}</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.checkin}>
                  Check In :
                  <Text style={{ fontWeight: "bold" }}>
                    {this.props.data.checkin}
                  </Text>
                </Text>
                <Text style={styles.checkout}>
                  Check Out :
                  <Text style={{ fontWeight: "bold" }}>
                    {this.props.data.checkout}
                  </Text>
                </Text>
              </View>
              <Text style={{ fontSize: 12 }}>
                Posiotion :
                <Text style={{ fontWeight: "bold" }}>
                  {this.props.data.position}
                </Text>
              </Text>
              <Text style={{ fontSize: 12 }}>
                Store :
                <Text style={{ fontWeight: "bold" }}>
                  {this.props.data.store}
                </Text>
              </Text>
              <Text style={{ fontSize: 12 }}>
                Province :
                <Text style={{ fontWeight: "bold" }}>
                  {this.props.data.province}
                </Text>
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </widget.Card>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    flexDirection: "column",
    justifyContent: "center"
  },
  name: { fontSize: 16, fontWeight: "bold" },
  checkin: { fontSize: 12, color: "grey" },
  checkout: { marginLeft: 15, fontSize: 12, color: "grey" }
});

export default NextDayList;

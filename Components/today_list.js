import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import * as widget from "react-native-elements";
// import ModalDropdown from "react-native-modal-dropdown";
import { Picker, Icon, Fab } from "native-base";

class TodayList extends Component {
  render() {
    return (
      <widget.Card containerStyle={{ borderRadius: 10 }}>
        <View style={{ flexDirection: "column" }}>
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 10
            }}
          >
            <Picker
              mode="dropdown"
              textStyle={styles.textButton}
              style={styles.dropdownButton}
              selectedValue={this.props.data.cost}
              onValueChange={value =>
                this.props.onCostChange(value, this.props.data)
              }
            >
              <Picker.Item label="Full" value="Full" />
              <Picker.Item label="Half" value="Half" />
              <Picker.Item label="None" value="None" />
            </Picker>

            <Picker
              mode="dropdown"
              textStyle={styles.textButton}
              style={styles.dropdownButton}
              selectedValue={this.props.data.status}
              onValueChange={value =>
                this.props.onStatusChange(value, this.props.data)
              }
            >
              <Picker.Item label="Normal" value="Normal" />
              <Picker.Item label="Absent" value="Absent" />
            </Picker>
          </View>
        </View>
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
  checkout: { marginLeft: 15, fontSize: 12, color: "grey" },
  dropdownButton: {
    flex: 1,
    width: 140,
    height: 40,
    borderColor: "orange",
    borderWidth: 2,
    borderRadius: 20
  },
  textButton: {
    fontSize: 12,
    color: "orange",
    fontWeight: "bold",
    alignContent: "center"
  }
});

export default TodayList;

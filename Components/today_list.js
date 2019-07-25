import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import * as widget from "react-native-elements";
import ModalDropdown from "react-native-modal-dropdown";

class TodayList extends Component {
  render() {
    return (
      <widget.Card containerStyle={{ borderRadius: 10 }}>
        <TouchableWithoutFeedback>
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
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <ModalDropdown
                options={["Full", "Half", "None"]}
                onSelect={(index, value) =>
                  this.props.onCostChange(value, this.props.data)
                }
                style={styles.dropdownButton}
                textStyle={styles.textButton}
                defaultValue={this.props.data.cost}
                dropdownStyle={{
                  width: 120,
                  height: 120
                }}
                dropdownTextStyle={styles.dropdownText}
                dropdownTextHighlightStyle={styles.textButton}
              />
              <widget.Button
                title="1 (ทำงาน)"
                type="outline"
                buttonStyle={styles.statusButton}
                titleStyle={styles.textButton}
              />
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
  checkout: { marginLeft: 15, fontSize: 12, color: "grey" },
  dropdownButton: {
    borderColor: "orange",
    borderWidth: 2,
    borderRadius: 20,
    paddingTop: 7,
    marginTop: 5,
    paddingHorizontal: 15
  },
  statusButton: {
    borderColor: "orange",
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 5,
    marginLeft: 10,
    paddingTop: 3,
    paddingBottom: 5,
    paddingHorizontal: 15
  },
  textButton: {
    color: "orange",
    fontSize: 12,
    fontWeight: "bold",
    textAlignVertical: "center"
  },
  dropdownText: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold"
  }
});

export default TodayList;

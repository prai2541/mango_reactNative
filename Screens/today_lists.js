import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import TodayList from "../Components/today_list";
import { Toast, Fab } from "native-base";

class TodayLists extends Component {
  state = {
    datas: [
      {
        name: "firstname lastname1",
        checkin: "8:30",
        checkout: "16:00",
        position: "position",
        store: "store",
        province: "province",
        cost: "Full",
        status: "Normal"
      },
      {
        name: "firstname lastname2",
        checkin: "8:30",
        checkout: "16:00",
        position: "position",
        store: "store",
        province: "province",
        cost: "Full",
        status: "Normal"
      },
      {
        name: "firstname lastname3",
        checkin: "8:30",
        checkout: "16:00",
        position: "position",
        store: "store",
        province: "province",
        cost: "Full",
        status: "Normal"
      },
      {
        name: "firstname lastname4",
        checkin: "8:30",
        checkout: "16:00",
        position: "position",
        store: "store",
        province: "province",
        cost: "Full",
        status: "Normal"
      }
    ]
  };

  handleCostChange = (value, data) => {
    const datas = [...this.state.datas];
    const index = datas.indexOf(data);
    datas[index] = { ...data };
    datas[index].cost = value;
    this.setState({ datas });
  };

  handleStatusChange = (value, data) => {
    const datas = [...this.state.datas];
    const index = datas.indexOf(data);
    datas[index] = { ...data };
    datas[index].status = value;
    this.setState({ datas });
  };

  handleSave = () => {
    Toast.show({
      text: "Saved",
      buttonText: "Okay"
    });
  };

  render() {
    return (
      <View>
        <ScrollView>
          {this.state.datas.map(data => (
            <TodayList
              data={data}
              key={data.name}
              id={data.name}
              onCostChange={this.handleCostChange}
              onStatusChange={this.handleStatusChange}
            />
          ))}
        </ScrollView>
        <Fab
          position="bottomRight"
          style={{ backgroundColor: "orange" }}
          onPress={this.handleSave}
        >
          <Text style={styles.textButton}>Save</Text>
        </Fab>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textButton: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
    alignContent: "center"
  }
});

export default TodayLists;

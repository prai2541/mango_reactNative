import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import TodayList from "../Components/today_list";

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
        cost: "Full"
      },
      {
        name: "firstname lastname2",
        checkin: "8:30",
        checkout: "16:00",
        position: "position",
        store: "store",
        province: "province",
        cost: "Full"
      },
      {
        name: "firstname lastname3",
        checkin: "8:30",
        checkout: "16:00",
        position: "position",
        store: "store",
        province: "province",
        cost: "Full"
      },
      {
        name: "firstname lastname4",
        checkin: "8:30",
        checkout: "16:00",
        position: "position",
        store: "store",
        province: "province",
        cost: "Full"
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

  handleSave = () => {
    Toast.show({
      text: "Saved",
      buttonText: "Okay"
    });
  };

  render() {
    return (
      <ScrollView>
        {this.state.datas.map(data => (
          <TodayList
            data={data}
            key={data.name}
            id={data.name}
            onCostChange={this.handleCostChange}
          />
        ))}
      </ScrollView>
    );
  }
}

export default TodayLists;

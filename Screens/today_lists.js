import React, { Component } from "react";
import { ScrollView } from "react-native";
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
        cost: "full"
      },
      {
        name: "firstname lastname2",
        checkin: "8:30",
        checkout: "16:00",
        position: "position",
        store: "store",
        province: "province",
        cost: "full"
      },
      {
        name: "firstname lastname3",
        checkin: "8:30",
        checkout: "16:00",
        position: "position",
        store: "store",
        province: "province",
        cost: "full"
      },
      {
        name: "firstname lastname4",
        checkin: "8:30",
        checkout: "16:00",
        position: "position",
        store: "store",
        province: "province",
        cost: "full"
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

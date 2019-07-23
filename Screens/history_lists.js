import React, { Component } from "react";
import { Alert, ScrollView } from "react-native";
import HistList from "../Components/history_list";

export default class HistoryLists extends Component {
  state = {
    datas: [
      {
        date: "date1",
        checkin: "8:30",
        checkout: "16:00",
        store: "loc",
        province: "province",
        approved: true
      },
      {
        date: "date2",
        checkin: "checkin",
        checkout: "checkout",
        store: "loc",
        province: "province",
        approved: true
      },
      {
        date: "date3",
        checkin: "checkin",
        checkout: "checkout",
        store: "loc",
        province: "province",
        approved: true
      },
      {
        date: "date4",
        checkin: "checkin",
        checkout: "checkout",
        store: "loc",
        province: "province",
        approved: true
      }
    ]
  };

  handleClick = date => {
    Alert.alert(date + " Tapped");
  };

  render() {
    return (
      <ScrollView>
        {this.state.datas.map(data => (
          <HistList
            data={data}
            id={data.date}
            key={data.date}
            onClick={this.handleClick}
          />
        ))}
      </ScrollView>
    );
  }
}

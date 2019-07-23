import React, { Component } from "react";
import HistList from "../Components/history_list";

export default class HistoryLists extends Component {
  state = {
    datas: [
      {
        date: "date1",
        loc: "loc",
        time: "time"
      },
      {
        date: "date2",
        loc: "loc",
        time: "time"
      },
      {
        date: "date3",
        loc: "loc",
        time: "time"
      },
      {
        date: "date4",
        loc: "loc",
        time: "time"
      },
      {
        date: "date5",
        loc: "loc",
        time: "time"
      }
    ]
  };

  render() {
    return this.state.datas.map(data => (
      <HistList data={data} id={data.date} key={data.date} />
    ));
  }
}

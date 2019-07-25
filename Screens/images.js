import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import ImageTile from "../Components/image_tile";

class Images extends Component {
  static navigationOptions = { title: "Images" };

  render() {
    return (
      <ScrollView>
        <ImageTile title="CHECK-IN" remark="Remark : " />
        <ImageTile title="CHECK-OUT" remark="Remark : " />
      </ScrollView>
    );
  }
}

export default Images;

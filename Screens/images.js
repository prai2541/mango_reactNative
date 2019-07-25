import React, { Component } from "react";
import { View } from "react-native";
import ImageTile from "../Components/image_tile";

class Images extends Component {
  static navigationOptions = { title: "Images" };

  render() {
    return (
      <View>
        <ImageTile caption="CHECK-IN" />
        <ImageTile caption="CHECK-OUT" />
      </View>
    );
  }
}

export default Images;

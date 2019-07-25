import React, { Component } from "react";
import { Tile } from "react-native-elements";
import { View, Text, TouchableWithoutFeedback } from "react-native";

class ImageTile extends Component {
  render() {
    return (
      <View style={{ flexDirection: "column" }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            paddingLeft: 10,
            marginTop: 10,
            marginBottom: 5
          }}
        >
          {this.props.title}
        </Text>
        <Tile
          imageSrc={{ uri: "https://picsum.photos/400" }}
          activeOpacity={1}
          contentContainerStyle={{ height: 0 }}
        />
        <Text style={{ marginLeft: 0, paddingLeft: 10, marginBottom: 20 }}>
          {this.props.remark}
        </Text>
      </View>
    );
  }
}

export default ImageTile;

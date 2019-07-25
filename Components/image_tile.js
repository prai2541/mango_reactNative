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
            fontSize: 16,
            paddingLeft: 10,
            marginTop: 10,
            marginBottom: 5
          }}
        >
          {this.props.caption}
        </Text>
        <Tile
          imageSrc={{ uri: "https://picsum.photos/400" }}
          containerStyle={{ marginBottom: 5 }}
          activeOpacity={1}
        />
      </View>
    );
  }
}

export default ImageTile;

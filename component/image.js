import React, { Component } from "react";
import { View, Image, Text } from "react-native";

export default class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: image
    };
  }
  render() {
    return (
      <View>
        <Text>hey </Text>

        <Image
          style={{ width: 400, height: 500 }}
          source={require("../images/elon.jpg")}
        />
      </View>
    );
  }
}

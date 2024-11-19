import { Button, Text, View } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";

const Greet = ({ name }) => {
  return (
    <View>
        <ImageBackground source={require('../assets/icon.png')} >
        <Text>Hello!! {name}</Text>
        <Button title="Do Greeting" />
      </ImageBackground>
    </View>
  );
};
export default Greet;

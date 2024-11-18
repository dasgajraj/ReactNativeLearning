import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
} from "react-native";
import React, { useState } from "react";
const logo = require("./assets/adaptive-icon.png");

const App = () => {
  const [isModalVisible, SetModalVisible] = useState(false);

  return (
    <View style={styles.view}>
      <ScrollView>
        {/* <Text>HelloWorld</Text> 
      <View style={styles.inner1}><Text></Text></View>
      <View style={styles.inner2}></View>
*/}{" "}
        <Image source={logo} style={styles.image} />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in nisi
          at ligula tempor feugiat. Ut rutrum sollicitudin risus nec commodo.
          Praesent egestas varius diam, pulvinar ultrices diam lacinia quis.
          Praesent id pharetra nulla, lacinia volutpat eros. In cursus nunc ut
          lectus porttitor hendrerit. Vestibulum ornare condimentum mi vitae
          congue. Sed vel mauris ac lacus dictum suscipit ut viverra ante.
          Pellentesque non faucibus lacus, malesuada fringilla lacus. Nunc nisi
          arcu, convallis et semper at, ultricies pellentesque orci. Maecenas
          feugiat nibh sit amet purus varius commodo. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Praesent sit amet nisl ac diam dapibus interdum. Vivamus at diam a leo
          porta condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Proin in nisi at ligula tempor feugiat. Ut rutrum sollicitudin
          risus nec commodo. Praesent egestas varius diam, pulvinar ultrices
          diam lacinia quis. Praesent id pharetra nulla, lacinia volutpat eros.
          In cursus nunc ut lectus porttitor hendrerit. Vestibulum ornare
          condimentum mi vitae congue. Sed vel mauris ac lacus dictum suscipit
          ut viverra ante. Pellentesque non faucibus lacus, malesuada fringilla
          lacus. Nunc nisi arcu, convallis et semper at, ultricies pellentesque
          orci. Maecenas feugiat nibh sit amet purus varius commodo. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Praesent sit amet nisl ac diam dapibus interdum. Vivamus at diam
          a leo porta condimentum.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Proin in nisi at ligula tempor feugiat. Ut rutrum
          sollicitudin risus nec commodo. Praesent egestas varius diam, pulvinar
          ultrices diam lacinia quis. Praesent id pharetra nulla, lacinia
          volutpat eros. In cursus nunc ut lectus porttitor hendrerit.
          Vestibulum ornare condimentum mi vitae congue. Sed vel mauris ac lacus
          dictum suscipit ut viverra ante. Pellentesque non faucibus lacus,
          malesuada fringilla lacus. Nunc nisi arcu, convallis et semper at,
          ultricies pellentesque orci. Maecenas feugiat nibh sit amet purus
          varius commodo. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Praesent sit amet nisl ac diam dapibus
          interdum. Vivamus at diam a leo porta condimentum.
        </Text>
        <Pressable onPress={() => console.log("photo pressed")}>
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            style={styles.image}
          />
        </Pressable>
        {/* <ImageBackground source={logo} style={styles.viewImage}><Text>hello image background</Text></ImageBackground>
      <ImageBackground source={{uri: "https://picsum.photos/4000"}} style={styles.view}><Text>hello image background</Text></ImageBackground> */}
        <Button
          title="Press me"
          onPress={() => {
            SetModalVisible(true);
          }}
          color="midnightblue"
          // disabled
        />
        <Modal
          visible={isModalVisible}
          onRequestClose={() => SetModalVisible(false)}
          animationType="fade"
          presentationStyle="formSheet"
        >
          <View style={styles.view}>
            <Text>Modal Content</Text>
            <Button
              title="close"
              onPress={() => {
                SetModalVisible(false);
              }}
              color="blue"
            />
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  view: {
    padding: 60,
    backgroundColor: "plum",
    flex: 1,
  },
  viewImage: {
    paddingTop: 40,
    backgroundColor: "plum",
    opacity: 0.98,
    flex: 1,
  },
  inner1: {
    width: 200,
    height: 200,
    backgroundColor: "blue",
  },
  inner2: {
    width: 200,
    height: 200,
    backgroundColor: "green",
  },
});

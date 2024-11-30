// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   ImageBackground,
//   ScrollView,
//   Button,
//   Pressable,
//   Modal,
//   StatusBar,
//   Alert,
// } from "react-native";
// import React, { useState } from "react";
// import { ActivityIndicator } from "react-native";
// const logo = require("./assets/adaptive-icon.png");
// import Greet from "./Components/Greet";

// const App = () => {
//   const [isModalVisible, SetModalVisible] = useState(false);
//   const [LoadStatus, SetLoadStatus] = useState(false);

//   return (
//     <View style={styles.view}>
//       <StatusBar
//         backgroundColor={"yellow"}
//         barStyle={"dark-content"}
//         hidden={LoadStatus}
//       />
//       <ScrollView>
//         <ActivityIndicator />
//         <ActivityIndicator
//           size={"large"}
//           color={"black"}
//           animating={LoadStatus}
//         />
//         <Button
//           title="Change Load"
//           onPress={() => {
//             SetLoadStatus(true);
//           }}
//         />
//         <Button
//           title="Change Load"
//           onPress={() => {
//             SetLoadStatus(false);
//           }}
//         />
//         <Button
//           title="Call Alert"
//           onPress={() => Alert.alert("function nahi hai")}
//         />
//         <Button
//           title="Call Alert 2"
//           onPress={() =>
//             Alert.alert("function nahi hai", "Session Expired\nTATA BYE")
//           }
//         />
//         <Button
//           title="Call Alert 3 with more than 1 buttons"
//           onPress={() =>
//             Alert.alert("function nahi hai", "Session Expired\nTATA BYE", [
//               {
//                 text: "cancel",
//                 onPress: () => SetLoadStatus(false),
//               },
//               {
//                 text: "Accept",
//                 onPress: () => SetLoadStatus(true),
//               },
//               {
//                 text: "Rather No To Say",
//                 onPress: () => console.warn("Dont know"),
//               },
//             ])
//           }
//         />
//         <Greet name="hi" />
//         <Greet name="Das Gajraj" />
//         <Greet name="Sharma" />
//         {/* <Text>HelloWorld</Text>
//       <View style={styles.inner1}><Text></Text></View>
//       <View style={styles.inner2}></View>
// */}
//         <Image source={logo} style={styles.image} />
//         <Text>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in nisi
//           at ligula tempor feugiat. Ut rutrum sollicitudin risus nec commodo.
//           Praesent egestas varius diam, pulvinar ultrices diam lacinia quis.
//           Praesent id pharetra nulla, lacinia volutpat eros. In cursus nunc ut
//           lectus porttitor hendrerit. Vestibulum ornare condimentum mi vitae
//           congue. Sed vel mauris ac lacus dictum suscipit ut viverra ante.
//           Pellentesque non faucibus lacus, malesuada fringilla lacus. Nunc nisi
//           arcu, convallis et semper at, ultricies pellentesque orci. Maecenas
//           feugiat nibh sit amet purus varius commodo. Orci varius natoque
//           penatibus et magnis dis parturient montes, nascetur ridiculus mus.
//           Praesent sit amet nisl ac diam dapibus interdum. Vivamus at diam a leo
//           porta condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing
//           elit. Proin in nisi at ligula tempor feugiat. Ut rutrum sollicitudin
//           risus nec commodo. Praesent egestas varius diam, pulvinar ultrices
//           diam lacinia quis. Praesent id pharetra nulla, lacinia volutpat eros.
//           In cursus nunc ut lectus porttitor hendrerit. Vestibulum ornare
//           condimentum mi vitae congue. Sed vel mauris ac lacus dictum suscipit
//           ut viverra ante. Pellentesque non faucibus lacus, malesuada fringilla
//           lacus. Nunc nisi arcu, convallis et semper at, ultricies pellentesque
//           orci. Maecenas feugiat nibh sit amet purus varius commodo. Orci varius
//           natoque penatibus et magnis dis parturient montes, nascetur ridiculus
//           mus. Praesent sit amet nisl ac diam dapibus interdum. Vivamus at diam
//           a leo porta condimentum.Lorem ipsum dolor sit amet, consectetur
//           adipiscing elit. Proin in nisi at ligula tempor feugiat. Ut rutrum
//           sollicitudin risus nec commodo. Praesent egestas varius diam, pulvinar
//           ultrices diam lacinia quis. Praesent id pharetra nulla, lacinia
//           volutpat eros. In cursus nunc ut lectus porttitor hendrerit.
//           Vestibulum ornare condimentum mi vitae congue. Sed vel mauris ac lacus
//           dictum suscipit ut viverra ante. Pellentesque non faucibus lacus,
//           malesuada fringilla lacus. Nunc nisi arcu, convallis et semper at,
//           ultricies pellentesque orci. Maecenas feugiat nibh sit amet purus
//           varius commodo. Orci varius natoque penatibus et magnis dis parturient
//           montes, nascetur ridiculus mus. Praesent sit amet nisl ac diam dapibus
//           interdum. Vivamus at diam a leo porta condimentum.
//         </Text>
//         <Pressable onPress={() => console.log("photo pressed")}>
//           <Image
//             source={{ uri: "https://picsum.photos/200" }}
//             style={styles.image}
//           />
//         </Pressable>
//         {/* {/* <ImageBackground source={logo} style={styles.viewImage}><Text>hello image background</Text></ImageBackground> */}
//         <ImageBackground
//           source={{ uri: "https://picsum.photos/4000" }}
//           style={styles.view}
//         >
//           <Pressable onPress={() => console.warn("Pressable pressed")}>
//             <Text>hello image background</Text>
//           </Pressable>
//         </ImageBackground>
//         <Button
//           title="Press me"
//           onPress={() => {
//             SetModalVisible(true);
//             console.log("Modal ACtivated");
//           }}
//           color="midnightblue"
//           // disabled
//         />
//         <Text>{isModalVisible ? "Modal is visible" : "Not Visible"}</Text>
//         <Modal
//           visible={isModalVisible}
//           onRequestClose={() => SetModalVisible(false)}
//           animationType="slide"
//           presentationStyle="fullScreen"
//         >
//           <View style={styles.Mview}>
//             <Text>{isModalVisible ? "Modal is visible" : "Not Visible"}</Text>

//             <Text>Modal Content</Text>
//             <Button
//               title="close"
//               onPress={() => {
//                 SetModalVisible(false);
//                 console.log("Modal DEactivated");
//               }}
//               color="blue"
//             />
//           </View>
//         </Modal>
//       </ScrollView>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   image: {
//     width: 200,
//     height: 200,
//   },
//   view: {
//     padding: 60,
//     backgroundColor: "plum",
//     flex: 1,
//   },
//   Mview: {
//     // padding: 0,
//     backgroundColor: "lightyellow",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 10,
//     marginLeft: 10,
//     flex: 1,
//   },
//   viewImage: {
//     paddingTop: 40,
//     backgroundColor: "plum",
//     opacity: 0.98,
//     flex: 1,
//   },
//   inner1: {
//     width: 200,
//     height: 200,
//     backgroundColor: "blue",
//   },
//   inner2: {
//     width: 200,
//     height: 200,
//     backgroundColor: "green",
//   },
// });

// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View style={[styles.Box1, styles.Box, styles.androidShadow]}>
//         <Text>orange Box</Text>
//       </View>
//       <View style={[styles.Box2, styles.Box]}>
//         <Text>White Box</Text>
//       </View>
//       <View style={[styles.Box3, styles.Box]}>
//         <Text>Green Box</Text>
//       </View>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "lightyellow",
//     alignContent: "center",
//     justifyContent: "center",
//     borderWidth: 5,
// borderColor:'red',
//   },
//   BoxShadow: {
// shadowColor: 'grey',
// shadowOffset: {
//   width: 0,
//   height: 2,
// },
// shadowOpacity: 0.8,
// shadowRadius: 20,

//   },
//   Box: {
//     width: 250,
//     height: 250,
//   },
//   Box1: {
//     backgroundColor: "orange",
//   },
//   Box2: {
//     backgroundColor: "White",
//   },
//   Box3: {
//     backgroundColor: "green",
//   },
//   androidShadow:
//   {
//     elevation: 10,

//     shadowColor: 'black',

//   }
// });

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import Box from "./Components/Box";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={true}
      />
      {/* <ActivityIndicator color='Black' animating={true} size={'large'}/> */}
      {/* <Text>App</Text> */}
      <Box style={{ backgroundColor: "#7f00ff", alignSelf:"auto"}}>V</Box>
      <Box style={{ backgroundColor: "indigo", alignSelf:"auto"}}>I</Box>
      <Box style={{ backgroundColor: "blue" ,alignSelf:"auto"}}>B</Box>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
    borderWidth: 3,
    borderColor: "plum",
  },
});

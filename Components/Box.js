import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Box = ({children,style}) => {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default Box

const styles = StyleSheet.create({
box:
{
backgroundColor: "#fff",
padding: 20,
},
text:
{
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: 'center',
},

})
import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
//import Icons from 'react-native-vector-icons/SimpleLineIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
const TextBox = ({placeHolder,iconName,textBoxName}) => {
  console.log(placeHolder,iconName)
  return (
    <View style={styles.userNameFlx}>
      <View style={{ borderWidth: 0, borderColor: "red" }}>
        <Text style={styles.usernameText}>{textBoxName}</Text>
      </View>
      <View style={styles.innerUsernameFlx}>
        <View style={{ top: 15, left: 10 }}><Icons name={iconName} size={25} color="#8B78FF" /></View>
        <TextInput
          style={styles.input}
          placeholder={placeHolder}
          placeholderTextColor= "#004A61"

        />
      </View>
    </View>
  )
}

export default TextBox

const styles = StyleSheet.create({
  input: {
   
    bottom: 35,
    height: 50,
    margin: 12,
    padding: 10,
    color: "#004A61",
    borderWidth: 0,
    fontSize: 19,
    width: "80%",
    left: 30,
  },
  userNameFlx: {
    borderWidth: 0,
    borderColor: "pink",
    height: "40%",
    top: 10,
    marginVertical:10

  },
  usernameText: {
    color: "#868D95",
    fontSize: 19,
    opacity: 0.5,
    left: 15
  },
  
  innerUsernameFlx: {
    borderWidth: 2,
    borderColor: "#E6E8EB",
    borderRadius: 3,
    backgroundColor: "#f5f5f5",
    width: 370,
    left: 15,
    height: 70
  }
})
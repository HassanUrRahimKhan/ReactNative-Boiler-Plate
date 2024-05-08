import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const TextBox = () => {
  return (
    <View style={styles.userNameFlx}>
      <View style={{borderWidth:1,borderColor:"red"}}>
        <Text style={styles.usernameText}>Username/ Email</Text>
      </View>
      <View>
        <TextInput
            style={styles.input}
        placeholder="Enter Username"
        />
      </View>
    </View>
  )
}

export default TextBox

const styles = StyleSheet.create({
    userNameFlx:{
        borderWidth:1,
        borderColor:"red",
        height:"70%",

    },
    usernameText:{
        color:"#004A61",
        fontSize:19
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
})
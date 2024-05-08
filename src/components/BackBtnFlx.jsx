import { StyleSheet, Text, View,Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native';
const BackBtnFlx = () => {
    const navigation = useNavigation();
    return (
        <View style={{justifyContent:"center",height:90,borderWidth:0,borderColor:"#00000"}}>
           <TouchableOpacity   onPress={() => navigation.goBack()}>
           <Image
                style={styles.tinyLogo}
                source={require("../../assets/backBtn.png")}
              
            />
           </TouchableOpacity >
        </View>
    )
}

export default BackBtnFlx

const styles = StyleSheet.create({
    tinyLogo: {
      
        width: 70,
        height: 60,
        left:12
      },
})
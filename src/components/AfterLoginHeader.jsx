import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const AfterLoginHeader = ({bgColor}) => {
  return (
    <View style={styles.headerFlx}>
      <Image
        style={styles.headerLogo}
        source={require("../../assets/headerLogo.png")}
        resizeMode="contain"
      />
      <View style={{flexDirection:"row",justifyContent:"space-between",borderWidth:0,borderColor:"red",width:75,left:100,alignItems:"center"}}>

      <Image
          style={styles.searchIcon}
          source={require("../../assets/searchIconHeader.png")}
          resizeMode="contain"
        />
        <Image
          style={styles.hamburger}
          source={require("../../assets/hamburger.png")}
          resizeMode="contain"
        />
        
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  headerFlx: {
    borderWidth: 0,
    borderColor: "red",
    height: 70,
    //justifyContent:"center",
    flexDirection: 'row',
    backgroundColor: "#fff"
    
  }, headerLogo: {
    width: "50%",
    height: 66,
    left: 25
  },
  hamburger: {

  }
})

export default AfterLoginHeader


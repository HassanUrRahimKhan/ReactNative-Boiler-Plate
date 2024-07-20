import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Feather'
const HomePageHeader = ({navigation}) => {
 
    
  function getCurrentDateFormatted() {
    // Array of weekday names
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Get current date
    const now = new Date();
    
    // Get the name of the weekday
    const dayName = weekdays[now.getDay()];
    
    // Get the day of the month
    const day = now.getDate();
    
    // Return formatted string
    return `${dayName}, ${day}`;
  }
  const CurrentDate = getCurrentDateFormatted();
  return (
    <View style={styles.headerFlx}>
      {/* <Image
        style={styles.headerLogo}
        source={require("../../assets/headerLogo.png")}
        resizeMode="contain"
      /> */}
      <View style={styles.headerLogo}>
      <Icons name={"grid"} size={25} color="#002055" />
      </View>

        <View style={styles.date}>
          <Text style={{fontWeight:"500",fontSize:18,color:"#002055"}}>{CurrentDate}</Text>
        </View>
      
      <View style={{flexDirection:"row",justifyContent:"space-between",borderWidth:0,borderColor:"red",width:75,left:100,alignItems:"center"}}>

      <Image
          style={styles.searchIcon}
          source={require("../../assets/notificationIcon.png")}
          resizeMode="contain"
        />
        
        <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
        <Image
          
          style={styles.hamburger}
          source={require("../../assets/hamburger.png")}
          resizeMode="contain"
        />
       
        </TouchableOpacity>
        
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
    borderWidth:0,
    borderColor:"red",
    width: "10%",
    height: "100%",
    left: 25,
    alignItems:"center",
    justifyContent:"center"
    
  },
  date:{
      borderWidth:0,
      width:"40%",
      left:"100%",
      alignItems:"center",
      justifyContent:"center"
  },
  hamburger: {

  }
})

export default HomePageHeader


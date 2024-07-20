import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';


const PreLogin = ({navigation}) => {
  // console.log(navigation.navigate("signinScreen"))
  return (
    <SafeAreaView style={{ backgroundColor: "#ffff", width: "100%", height: "100%" }}>

      <View style={styles.preLoginBack}>

        <View style={{ height: 496 }}>
          <View style={styles.upperFlex}>

            <Image
              style={styles.tinyLogo}
              source={require("../../assets/UpperImage.png")}
            />
            <Image
              style={{top:-480}}
              source={require("../../assets/Vector.png")}
            />

          </View>
           
          
          <View style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "35%", borderWidth: 0, borderColor: "red", top: -350 }}>

            {/* <Image
              style={styles.logo}
              source={require("../../assets/Logo.png")}
            /> */}

          </View>
          <View style={{ width: "100%", borderWidth: 0, height: "18%", top: -280 }}>
            <Text style={styles.heading}>TASKEY</Text>
          </View>

        </View>

        <View style={{ borderWidth: 0, borderColor: "black", width: "60%", height: "12%", top: 30, left: 100 }}>
          <View>
          <Text style={{ color: "#8B78FF", fontSize: 26, lineHeight: 37 }}>BUILDING BETTER</Text>
          <Text style={{ color: "#8B78FF", fontSize: 26, lineHeight: 37,left:22 }}>WORKSPACES</Text>
          </View>
          
        </View>

        <View style={{ width: "100", height: 40, borderWidth: 0, borderColor: "gray", top: 50, left:9,alignItems:'center' }}>
          <Text style={{color:"#8D8D8D",fontSize:12}}>Create a unique emotional story that describe better than words</Text>
        </View>

        <View style={{ width: "100%", height: "10%", borderWidth: 0, borderColor: "pink", top: 70, display: 'flex', justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity style={{ borderWidth: 0, borderColor: "#0D986A", width: "90%", height: "70%", borderRadius: 30, backgroundColor: "#8B78FF", display: "flex", justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('Intro1Screen')} >
            <Text style={{ textAlign: 'center', fontSize: 20, color: "white" }}>Get Started</Text>
          </TouchableOpacity>
        </View>




      </View>
    </SafeAreaView>
  )
}

export default PreLogin

const styles = StyleSheet.create({
  preLoginBack: {
    backgroundColor: '#ffff',
    height: "100%",
    borderWidth: 0,
    borderColor: "red"

  },
  upperFlex: {
    borderWidth: 0,
    borderColor: "yellow",
    height: 496
  },
  tinyLogo: {
    width: 411,
    height: 496,
  },
  logo: {
    width: 257,
    height: 211.65,

  },
  heading: {
    fontSize: 50,
    color: "white",
    textAlign: "center",

  }
})
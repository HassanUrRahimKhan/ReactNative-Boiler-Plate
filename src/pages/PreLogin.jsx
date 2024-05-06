import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PreLogin = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#ffff", width: "100%", height: "100%" }}>

      <View style={styles.preLoginBack}>

        <View style={{ height: 496 }}>
          <View style={styles.upperFlex}>

            <Image
              style={styles.tinyLogo}
              source={require("../../assets/upperRectangle.png")}
            />
            <Image
              style={{top:-480}}
              source={require("../../assets/Vector.png")}
            />

          </View>
           
          
          <View style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "35%", borderWidth: 0, borderColor: "red", top: -350 }}>

            <Image
              style={styles.logo}
              source={require("../../assets/Logo.png")}
            />

          </View>
          <View style={{ width: "100%", borderWidth: 0, height: "18%", top: -280 }}>
            <Text style={styles.heading}>PLANTIFY</Text>
          </View>

        </View>

        <View style={{ borderWidth: 0, borderColor: "black", width: "45%", height: "12%", top: 30, left: 15 }}>
          <Text style={{ color: "#0D986A", fontSize: 26, lineHeight: 37 }}>GET READY BE HIGYENIC</Text>
        </View>

        <View style={{ width: 327, height: 40, borderWidth: 0, borderColor: "gray", top: 50, left:15 }}>
          <Text style={{color:"#0D986A",fontSize:12}}>Jelajahi AiLearn untuk menambah kemampuanmu
            dalam mengoperasikan Adobe Illustrator</Text>
        </View>

        <View style={{ width: "100%", height: "10%", borderWidth: 0, borderColor: "pink", top: 70, display: 'flex', justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity style={{ borderWidth: 0, borderColor: "#0D986A", width: "90%", height: "70%", borderRadius: 30, backgroundColor: "#0D986A", display: "flex", justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ textAlign: 'center', fontSize: 20, color: "white" }}>MASUK</Text>
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